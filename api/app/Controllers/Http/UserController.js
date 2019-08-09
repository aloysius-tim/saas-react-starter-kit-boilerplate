'use strict';

class UserController {
  // GET
  async me ({ response, auth }) {
    const user = await auth.getUser();
    user.profile = await user.profile().fetch();
    return response.status(200).json(user);
  }
}

module.exports = UserController;
