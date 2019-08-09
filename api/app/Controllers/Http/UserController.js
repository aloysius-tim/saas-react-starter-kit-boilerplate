'use strict';

const Stripe = use('Stripe');

class UserController {
  // GET
  async me ({ response, auth }) {
    const user = await auth.getUser();
    if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }

    user.profile = await user.profile().fetch();

    const sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);
    user.subscriptions = sCustomer.subscriptions.data;

    return response.status(200).json(user);
  }
}

module.exports = UserController;
