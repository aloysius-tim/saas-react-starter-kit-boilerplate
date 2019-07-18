'use strict';

class UserController {
  async userOnboarded ({ response, auth }) {
    const user = await auth.getUser();
    user.onboarded = true;
    await user.save();

    return response.status(200).json(user);
  }
}

module.exports = UserController;
