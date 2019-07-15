'use strict';
const Stripe = use('Stripe');
const User = use('App/Models/User');
const Subscription = use('App/Models/Subscription');
const Env = use('Env');
const moment = use('Moment');

class PaymentController {

  /**
   * Suscribe a new customer to a plan with a new credit card
   * @param request
   * @param response
   * @param auth
   * @returns {Promise<*>}
   */
  async subscribeNewCustomer({request, response, auth}) {
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

      let profile = await user.profile().update({
        first_name: request.post().firstname,
        last_name: request.post().lastname
      });
      user.stripe_cus_id = s_customer.id;
      user = await user.save();

      s_subscription = await Stripe.subscriptions.create({
        customer: s_customer.id,
        items: [{plan: request.post().planId}],
        trial_end: moment().add(15, 'days').unix()
      });

    } catch (e) {
      console.log(e.message);
      return response.status(500).json(e)
    }

    return response.status(200).json({s_customer, s_subscription})
  }

  async setDefaultCard({request, response, auth}) {
    let user = await auth.getUser();
    let cardId = request.params.cardId;

    try {
      if (!user.stripe_cus_id)
        return response.status(500).json({message: 'User is not a Stripe USER'});
      await Stripe.customers.update(
        user.stripe_cus_id, {default_source: cardId}
      );
      let s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(s_customer);

    } catch (e) {
      return response.status(500).json(e);
    }
  }

  async newCreditCard({request, response, auth}) {
    let user = await auth.getUser();
    let tokenId = request.params.tokenId;

    try {
      if (!user.stripe_cus_id)
        return response.status(500).json({message: 'User is not a Stripe USER'});

      await Stripe.customers.update(
        user.stripe_cus_id, {source: tokenId}
      );
      let s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(s_customer);
    } catch (e) {
      return response.status(500).json(e);
    }
  }

  async deleteCard({request, response, auth}) {
    let user = await auth.getUser();
    let cardId = request.params.cardId;

    try {
      if (!user.stripe_cus_id)
        return response.status(500).json({message: 'User is not a Stripe USER'});

      await Stripe.customers.deleteSource(user.stripe_cus_id, cardId);
      let s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(s_customer);
    } catch(e){
      console.log(e);
      return response.status(500).json(e);
    }
  }

  async getCustomer({request, response, auth}) {
    let s_customer;

    let user = await auth.getUser();

    if (!user.stripe_cus_id)
      return response.status(500).json({message: 'User is not a Stripe USER',});

    s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);

    return response.status(200).json(s_customer);
  }

  async cancelSubscription({request, response, auth}) {
    let user = await auth.getUser();
    let subId = request.params.subId;

    try {
      if (!user.stripe_cus_id)
        return response.status(500).json({message: 'User is not a Stripe USER'});

      await Stripe.subscriptions.del(subId);
      let s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(s_customer);
    } catch (e) {
      console.log(e);
      return response.status(500).json(e);
    }
  }
}

module.exports = PaymentController;
