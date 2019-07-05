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

      user.stripe_cus_id = s_customer.id;
      user.customer = s_customer;
      user = await user.save();

      s_subscription = await Stripe.subscriptions.create({
        customer: s_customer.id,
        items: [{plan: request.post().plan.id}],
        trial_end: moment().add(15, 'days').unix()
      });

      let subscription = new Subscription();
      subscription.user_id = user.id;
      subscription.subscription = s_subscription;
      subscription.stripe_plan_id = s_subscription.plan.id;
      subscription = await subscription.save();

    } catch (e) {
      console.log(e.message);
      return response.status(500).json(e)
    }

    return response.status(200).json({s_customer, s_subscription})
  }

  /*async customer ({request, response}){
    console.log(request.post());

    let user = await User.update({
      email: request.post().email
    }, {...request.post()}, {upsert: true});
    console.log('user saved', user);

    let customer = await Stripe.customers.create(
      {
        email: request.post().email,
        metadata: {
          referral: 'tim'
        },
        source: request.post().id
      }
    );
    console.log('customer creation', customer);

    const subscription = await Stripe.subscriptions.create({
      customer: customer.id,
      items: [{plan: 'plan_DhW80O86SjjNdL'}],
      trial_end: moment().add(14, 'days').unix()
    });
    console.log('subscription', subscription);

    user = await User.update({email: request.post().email}, {subscription, customer}, {upsert: true});

    response.send({user});
  }*/
}

module.exports = SubscriptionController;
