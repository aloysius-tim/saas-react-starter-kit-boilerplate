/* eslint-disable prefer-destructuring */

'use strict';

const Hash = use('Hash');
const Mail = use('Mail');
const uuid = use('uuid/v1');
const User = use('App/Models/User');
const logger = use('App/Helpers/Logger');
const Env = use('Env');
const Stripe = use('Stripe');

class AuthController {
  // POST
  async authorise ({ request, response, auth }) {
    const { email, password } = request.all();
    try {
      const user = await User.findBy('email', email);
      user.profile = await user.profile().fetch();

      const result = await auth.withRefreshToken().attempt(email, password, { user });
      if (user.banned) {
        // revoke all tokens
        await auth.scheme('jwt').revokeTokens();
        return response.status(401).json({ message: 'You are banned from this site. Contact admin.' });
      }
      await logger('info', 'User Login', user.id, null, email);
      return response.status(200).json(result);
    } catch (errors) {
      console.log(errors);
      errors.email = email;
      await logger('error', 'User Login: Failed', null, null, errors);
      return response.status(401).json({ message: "Darn! Can't authorise you with those details." });
    }
  }

  async updateToken ({ response, auth }) {
    try {
      const user = await auth.getUser();
      user.profile = await user.profile().fetch();

      const jwt = await auth.generate(user, { user });
      return response.status(200).json(jwt);
    } catch (errors) {
      console.log(errors);
      await logger('error', 'User update token: Failed', null, null, errors);
      return response.status(401).json({
        message: "Darn! Can't authorise you with those details.",
        errors
      });
    }
  }

  async redirectToProvider ({ ally, params }) {
    await ally.driver(params.provider).redirect();
  }

  async handleProviderCallback ({ params, ally, auth, response }) {
    // eslint-disable-next-line prefer-destructuring
    const provider = params.provider;
    let jwt;
    try {
      const userData = await ally.driver(params.provider).getUser();
      const email = userData.getEmail();
      let user = new User();

      /** If user is already registered with SSO * */
      let authUser = await User.query().where({ [`${provider}_id`]: userData.getId() }).first();
      if (!(authUser === null)) {
        console.log('User is already registered with sso');
        authUser.profile = await authUser.profile().fetch();
        jwt = await auth.withRefreshToken().generate(authUser, { user: authUser });
        return response.redirect(`${Env.get('APP_URL')}/auth/login/${jwt.token}`);
      }

      /** If user is registered only with username/password * */
      authUser = await User.query().where({ email }).first();
      if (!(authUser === null)) {
        authUser[`${provider}_id`] = userData.getId();
        user.provider = 'social';
        await authUser.save();
        authUser.profile = await authUser.profile().fetch();

        jwt = await auth.withRefreshToken().generate(authUser, { user: authUser });
        return response.redirect(`${Env.get('APP_URL')}/auth/login/${jwt.token}`);
      }

      /** If user is not registered at all * */
      user.username = userData.getNickname() || userData.getName() || userData.getEmail();
      user.email = userData.getEmail();
      user.provider = 'social';
      user[`${provider}_id`] = userData.getId();
      await user.save();

      user = await User.query().where({ email }).first();
      const profile = await user.profile().fetch();
      profile.avatar = userData.getAvatar();
      profile.name = userData.getName();
      user.profile = await profile.save();
      /* user = await User.query().where({'email': email}).first(); */
      user.profile = await user.profile().fetch();

      jwt = await auth.withRefreshToken().generate(user, { user });
      this.welcomeEmail(user);
      return response.redirect(`${Env.get('APP_URL')}/auth/login/${jwt.token}`);
    } catch (e) {
      console.log(e);
      return response.redirect(`${Env.get('APP_URL')}/auth/login`);
    }
  }

  welcomeEmail (user) {
    return Mail.send('emails.welcome', { token: (user.confirmation_token) ? user.confirmation_token : 'verified', name: user.username }, message => {
      message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
      message.subject(`Welcome to${Env.get('APP_NAME')}`);
      message.to(user.email);
    });
  }

  async logout ({ auth, response }) {
    await auth.logout();
    response.redirect('/');
  }

  // POST
  async signup ({ request, response, auth }) {
    const { name, email, password } = request.all();
    let user = new User();
    user.username = name;
    user.email = email;
    user.password = password;

    const sCustomer = await Stripe.customers.create({ email: user.email });
    user.stripe_cus_id = sCustomer.id;

    const res = await user.save();
    if (res) {
      user = await User.query().where({ email }).first();
      user.profile = await user.profile().fetch();
      await this.welcomeEmail(user);

      const result = await auth.withRefreshToken().generate(user, { user });
      await logger('info', 'User Signup', user.id, user.id, user.email);
      return response.status(201).json(result);
    }

    return response.status(500).json({ message: 'Something went wrong. Try again or contact admin.' });
  }
  // POST
  async updatePassword ({ request, response, auth }) {
    const { password, newPassword } = request.all();
    const user = auth.user;
    const passwordValid = await Hash.verify(password, user.password);
    if (!passwordValid) {
      return response.status(400).json({ message: 'Invalid current password.' });
    }

    user.password = await Hash.make(newPassword);
    user.reset_token = null;
    const result = await user.save();

    if (result) {
      await Mail.send('emails.update-password', { name: user.username }, message => {
        message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
        message.subject('Password Update');
        message.to(user.email);
      });
      await logger('info', 'Password Updated', user.id, user.id, user.email);
      return response.status(200).json({ message: 'Passoword Updated.' }, result);
    }

    return response.status(500).json({ message: 'Something went wrong. Try again or contact admin.' });
  }
  // POST
  async updateEmail ({ request, response, auth }) {
    const { email, password } = request.all();
    const user = auth.user;
    const passwordValid = await Hash.verify(password, user.password);
    if (!passwordValid) {
      return response.status(400).json({ message: 'Invalid current password.' });
    }

    const hasUser = await User.findBy('email', email);

    if (hasUser && hasUser.email !== user.email) {
      return response.status(400).json({ message: 'Somebody is already using this email.' });
    }

    user.email = email;
    user.confirmation_token = uuid();
    user.verified = false;
    const res = await user.save();

    if (res) {
      await Mail.send('emails.update-email', { token: user.confirmation_token, name: user.username, newEmail: email }, message => {
        message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
        message.subject('Email Update');
        message.to(user.email);
      });
      await logger('info', 'Email Updated', user.id, user.id, user.email);
      return response.status(200).json({ message: 'Email Updated, Recheck your email, Please verify your new email.' }, user);
    }

    return response.status(500).json({ message: 'Something went wrong. Try again or contact admin.' });
  }
  // POST
  async resendEmailVerificationCode ({ request, response }) {
    const data = request.only(['email']);
    // find or fail user by email
    const user = await User.findBy('email', data.email);
    if (!user) {
      return response.status(400).json({ message: 'Wrong email.' });
    }

    // check if already verified
    if (!user.confirmation_token) {
      return response.status(422).json({ message: 'Your account is already verified.' });
    }

    // resend verification
    await this.welcomeEmail(user);

    // send response
    await logger('info', 'User Email Verify Link Sent', user.id, user.id, user.email);
    return response.status(200).json({ message: 'Email sent! Recheck your email. Please verify your account.' });
  }
  // GET
  async confirmEmail ({ response, params }) {
    const token = params.token;
    const user = await User.findBy('confirmation_token', token);

    // if user exists
    if (user) {
      user.confirmation_token = null;
      user.verified = true;
      await user.save();
      await logger('info', 'User Email Verified', user.id, user.id, user.email);
      return response.status(200).json({ message: 'Account verified, thank you. You can now log in.' });
    }

    return response.status(404).json({ message: 'Invalid Varification Code.' });
  }
  // GET
  async toggleUserBan ({ response, params, auth }) {
    const id = params.id;
    const user = await User.find(id);

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    const admin = await auth.getUser();
    if (admin.id === user.id) {
      return response.status(400).json({ message: "You can't ban yourself." });
    }

    if (user.role === User.roles[0]) {
      return response.status(400).json({ message: `${User.roles[0]} Can't be banned, degrade user role first.` });
    }

    user.banned = !user.banned;
    const result = await user.save();

    if (result) {
      await logger('info', `User Banned: ${user.banned}`, admin.id, user.id, user.email);
      return response.status(200).json({ message: `User  banned: ${user.banned}` });
    }

    return response.status(500).json({ message: 'Something went wrong.' });
  }
  // GET
  async removeUser ({ response, params, auth }) {
    const id = params.id;
    const user = await User.find(id);

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    const admin = await auth.getUser();
    if (admin.id === user.id) {
      return response.status(400).json({ message: "You can't remove yourself." });
    }

    if (user.role === User.roles[0]) {
      return response.status(400).json({ message: `${User.roles[0]} Can't be removed, degrade user role first.` });
    }

    const result = await user.delete();

    if (result) {
      await logger('info', 'User Removed', admin.id, user.id, user);
      return response.status(200).json({ message: `User  Removed: ${user.email}` });
    }

    return response.status(500).json({ message: 'Something went wrong.' });
  }
  // POST
  async forgotPassword ({ request, response }) {
    const data = request.only(['email']);

    // find or fail user by email
    const user = await User.findBy('email', data.email);
    if (!user) {
      return response.status(400).json({ message: 'Wrong email.' });
    }

    // add reset token to user
    user.reset_token = uuid();
    await user.save();

    // resend verification
    await Mail.send('emails.forgot', { token: user.reset_token, name: user.username }, message => {
      message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
      message.subject('Reset password');
      message.to(user.email);
    });

    // send response
    await logger('info', 'User Forgot Passoword', user.id, user.id, `Reset password email has been sent to ${user.email}`);
    return response.status(200).json({ message: 'Reset password email has been sent.' });
  }
  // POST
  async resetPassword ({ request, response }) {
    const data = request.only(['token', 'password']);

    // find or fail user by reset token
    const user = await User.findBy('reset_token', data.token);
    if (!user) {
      return response.status(400).json({ message: 'Invalid reset code.' });
    }

    // add new password to user
    user.password = await Hash.make(data.password);
    user.reset_token = null;
    await user.save();

    await logger('info', 'User Passoword Reset', user.id, user.id, `Password has been changed for ${user.email}, thank you.`);

    return response.status(200).json({ message: 'Password has been changed, thank you, you can close this page.' });
  }
  // POST
  async refreshToken ({ request, response, auth }) {
    const refreshToken = request.input('refresh_token');
    const result = await auth.newRefreshToken().generateForRefreshToken(refreshToken);
    return response.status(200).json(result);
  }
  // GET
  async revokeToken ({ request, response, auth }) {
    const { refreshToken, isRevokeAll, isRemove } = request.all();
    if (isRevokeAll) {
      const result = await auth.scheme('jwt').revokeTokens();
      return response.status(200).json(result);
    }
    if (refreshToken && refreshToken.length > 10 && isRemove) {
      const result = await auth.scheme('jwt').revokeTokens([refreshToken], true);
      return response.status(200).json(result);
    }

    if (refreshToken && refreshToken.length > 10) {
      const result = await auth.scheme('jwt').revokeTokens([refreshToken]);
      return response.status(200).json(result);
    }

    return response.status(400).json({ message: 'Invalid or missing refreshToken.' });
  }
  // GET
  async myTokens ({ response, auth }) {
    const tokens = await auth.listTokens();
    return response.status(200).json(tokens);
  }
  // GET
  async users ({ request, response }) {
    // eslint-disable-next-line no-restricted-globals,max-len,radix
    const page = (request.all().page && !isNaN(parseInt(request.all().page))) ? parseInt(request.all().page) : 1;

    let result = await User.query().paginate(page);

    result = result.toJSON();

    result.data = await Promise.all(result.data.map(async el => {
      const usr = await User.find(el.id);
      const profile = await usr.profile().first();
      el.profile = profile;
      return el;
    }));

    return response.status(200).json(result);
  }
  // POST Assign auth level to user
  async assignRole ({ request, response, auth }) {
    const admin = await auth.getUser();
    const { userId, role } = request.only(['userId', 'role']);

    if (!role || !User.roles.includes(role)) {
      return response.status(400).json({ message: 'Role is not valid.', roles: User.roles });
    }

    const user = await User.find(userId);

    if (!user) {
      return response.status(400).json({ message: 'Invalid user id.' });
    }

    if (admin.id === user.id) {
      return response.status(400).json({ message: "You can't assign a role to yourself." });
    }

    if (user.role === role) {
      return response.status(400).json({ message: 'This role is already assigned to the user.' });
    }

    user.role = role;

    const result = await user.save();

    if (result) {
      await Mail.send('emails.role-assign', { user }, message => {
        message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
        message.subject('Role assigned');
        message.to(user.email);
      });
      await logger('info', 'User Role assign', user.id, admin.id, user.role);
      return response.status(200).json({ message: 'User role assigned.' });
    }

    return response.status(500).json({ message: 'Something went wrong. Try again or contact admin.' });
  }

  /*  #######  Pages with view  ######### */
  // GET
  async confirmEmailRender ({ params, view }) {
    const token = params.token;
    const user = await User.findBy('confirmation_token', token);

    // if user exists
    if (user) {
      user.confirmation_token = null;
      user.verified = true;
      await user.save();
      await logger('info', 'User Email Verified', user.id, user.id, user.email);
      return view.render('notify', { type: 'info', message: 'Email verified, thank you. You may close this window now.' });
    }

    return view.render('notify', { type: 'warning', message: 'Invalid email verification code.' });
  }
  // GET
  async resetPasswordForm ({ params, view }) {
    const token = params.token;

    // find or fail user by reset token
    const user = await User.findBy('reset_token', token);
    if (!user) {
      return view.render('notify', { type: 'warning', message: 'Invalid reset code.' });
    }
    return view.render('auth.reset', { token });
  }
}

module.exports = AuthController;
