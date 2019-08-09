'use strict';

const Stripe = use('Stripe');
const moment = use('Moment');

class UserController {
  // GET
  async me ({ response, auth }) {
    const user = await auth.getUser();
    if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }

    user.profile = await user.profile().fetch();

    const sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);
    user.subscriptions = sCustomer.subscriptions.data;

    user.subscribed = sCustomer.subscriptions.data.length > 0;
    user.current_plan_name = user.subscribed ? sCustomer.subscriptions.data[0].plan.nickname : '';
    user.current_plan_id = user.subscribed ? sCustomer.subscriptions.data[0].plan.id : '';
    user.trial = user.subscribed ? moment().isAfter(moment().unix(sCustomer.subscriptions.data[0].trial_end), 'day') : false;
    return response.status(200).json(user);
  }
}

module.exports = UserController;
