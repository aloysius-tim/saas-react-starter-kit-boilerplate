/* eslint-disable camelcase */

'use strict';

const Mail = use('Mail');
const User = use('App/Models/User');
const Logger = use('Logger');
const Env = use('Env');

class StripeWebHookController {
  async webhook ({ request }) {
    console.log(`Webhook: ${request.post().type}`);

    switch (request.post().type) {
      case 'customer.subscription.updated':
        await this.updateSubscription(request.post());
        break;
      case 'customer.subscription.created':
        await this.newSubscription(request.post());
        break;
      case 'invoice.payment_failed':
        await this.paymentFailed(request.post());
        break;
      default:
        console.log(`Webhook: ${request.post().type}: No handler`);
    }
  }

  async newSubscription (data) {
    const stripe_cus_id = data.data.object.customer;
    let user;

    if (stripe_cus_id === 'cus_00000000000000')
      user = { email: Env.get('APP_SUPERADMIN_EMAIL') };
    else user = await User.findBy('stripe_cus_id', stripe_cus_id);

    Logger.info(`Webhook: ${user.email} ${data.type}`, data);

    if (!user)
      return;

    await Mail.send('emails.notification', {
      subject: 'New Subscription',
      message: "Congrats, you're now subscribed to our plan"
    }, message => {
      message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
      message.subject(`Welcome to${Env.get('APP_NAME')}`);
      message.to(user.email);
    });
  }

  async updateSubscription (data) {
    const stripe_cus_id = data.data.object.customer;
    let user;

    if (stripe_cus_id === 'cus_00000000000000')
      user = { email: Env.get('APP_SUPERADMIN_EMAIL') };
    else user = await User.findBy('stripe_cus_id', stripe_cus_id);

    Logger.info(`Webhook: ${user.email} ${data.type}`, data);

    if (!user)
      return;

    await Mail.send('emails.notification', {
      subject: 'Subscription updated',
      message: 'Congrats, your subscription have been updated successfully'
    }, message => {
      message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
      message.subject(`Welcome to${Env.get('APP_NAME')}`);
      message.to(user.email);
    });
  }

  async paymentFailed (data) {
    const stripe_cus_id = data.data.object.customer;
    let user;

    if (stripe_cus_id === 'cus_00000000000000')
      user = { email: Env.get('APP_SUPERADMIN_EMAIL') };
    else user = await User.findBy('stripe_cus_id', stripe_cus_id);

    Logger.info(`Webhook: ${user.email} ${data.type}`, data);

    if (!user)
      return;

    await Mail.send('emails.notification', {
      subject: 'Payment failed - Account suspended',
      message: 'We\'re sorry, your payment have failed for some reasons and we\'re suspended your account... Please update your payments informations'
    }, message => {
      message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
      message.subject(`Payment failed - Account suspended / ${Env.get('APP_NAME')}`);
      message.to(user.email);
    });
  }

  async default (data) {
    const stripe_cus_id = data.data.object.customer;
    let user;

    if (stripe_cus_id === 'cus_00000000000000')
      user = { email: Env.get('APP_SUPERADMIN_EMAIL') };
    else user = await User.findBy('stripe_cus_id', stripe_cus_id);

    Logger.info(`Webhook: ${user.email} ${data.type}`, data);

    if (!user)
      return;

    await Mail.send('emails.notification', {
      subject: 'Subscription updated',
      message: 'Congrats, your subscription have been updated successfully'
    }, message => {
      message.from(`${Env.get('EMAIL_SENDER_NAME')}<${Env.get('MAILGUN_EMAIL_SENDER')}>`);
      message.subject(`Welcome to${Env.get('APP_NAME')}`);
      message.to(user.email);
    });
  }
}

module.exports = StripeWebHookController;
