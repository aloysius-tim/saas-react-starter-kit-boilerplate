'use strict';
const Stripe = use('Stripe');
const User = use('App/Models/User');
const Subscription = use('App/Models/Subscription');
const Env = use('Env');
const moment = use('Moment');

class SubscriptionController {

  /**
   * Suscribe a new customer to a plan with a new credit card
   * @param request
   * @param response
   * @param auth
   * @returns {Promise<*>}
   */
  async subscribeNewCustomer({ request, response, auth }) {
    let user = await auth.getUser();
    let s_customer, s_subscription;

    try {
      s_customer = await Stripe.customers.create(
        {
          email: user.email,
          name: request.post().firstname + " " + request.post().lastname,
          source: request.post().token,
        }
      );

      let profile = await user.profile().update({ first_name: request.post().firstname, last_name: request.post().lastname });
      user.stripe_cus_id = s_customer.id;
      user = await user.save();

      s_subscription = await Stripe.subscriptions.create({
        customer: s_customer.id,
        items: [{plan: request.post().plan.id}],
        trial_end: moment().add(15, 'days').unix()
      });

    } catch (e) {
      console.log(e.message);
      return response.status(500).json(e)
    }

    return response.status(200).json({s_customer, s_subscription})
  }

  async getCustomer({request, response, auth}){
    let s_customer;

    let user = await auth.getUser();

    if (!user.stripe_cus_id)
      return response.status(500).json({message: 'User is not a Stripe USER',});

    s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);

    return response.status(200).json(s_customer);
  }
}

module.exports = SubscriptionController;
