'use strict';
const Stripe = use('Stripe');
const User = use('App/Models/User');
const Subscription = use('App/Models/Subscription');
const Env = use('Env');
const moment = use('Moment');

class PaymentController {

  async subscribe({request, response, auth}) {
    let user = await auth.getUser();
    let sourceToken = request.post().sourceToken;
    let planId = request.post().planId;
    let s_subscription, s_customer;

    if (!user.stripe_cus_id)
      return response.status(500).json({message: 'User is not a Stripe USER'});

    try{
      s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);

      let haveCreditCard = s_customer.sources.data.length > 0;
      let haveSubscription = s_customer.subscriptions.data.length > 0;

      /**
       * Case the customer need to add a valid source
       */
      if (!haveCreditCard) {
        if (!sourceToken)
          return response.status(500).json({message: 'Request should contain a Credit Card source'});
        if (!request.post().lastname && ! request.post().firstname)
          return response.status(500).json({message: 'Request should contain Credit card owner\'s name'});
        console.log('Adding new card');
        let source = await Stripe.customers.createSource(user.stripe_cus_id, {source: sourceToken});
        s_customer = await Stripe.customers.update(user.stripe_cus_id, {default_source: source.id, name: request.post().firstname + " " + request.post().lastname});
      }

      /**
       * Case the customer Downgrade or Upgrade his plan
       * By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a €100 plan, she'll be billed €100 immediately. If on May 15 she switches to a €200 plan, then on June 1 she'll be billed €250 (€200 for a renewal of her subscription, plus a €50 prorating adjustment for half of the previous month's €100 difference).
       * https://stripe.com/docs/api/subscriptions/update
       */
      if (haveSubscription){
        console.log('Downgrade or Upgrade customer\'s plan');
        s_subscription = await Stripe.subscriptions.update(
          s_customer.subscriptions.data[0].id,
          {
            cancel_at_period_end: false,
            items: [{
              id: s_customer.subscriptions.data[0].items.data[0].id,
              plan: planId,
            }]
          }
        );
      }

      /**
       * Case the customer subscribe his first plan
       * /!\ In this particular case, user can fraud and subscribe a new trial every 15 days...
       */
      if (!haveSubscription){
        console.log('Subscribe customer to a plan');
        let s_plan = await Stripe.plans.retrieve(planId);
        s_subscription = await Stripe.subscriptions.create({
          customer: s_customer.id,
          items: [{plan: planId}],
          trial_end: moment().add(s_plan.trial_period_days ? s_plan.trial_period_days : 0, 'days').unix()
        });
      }

      s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json({s_customer, s_subscription});
    } catch (e) {
      console.log(e.message);
      return response.status(500).json(e)
    }
  }

  async subscribeCustomer({request, response, auth}) {
    let user = await auth.getUser();
    let s_customer, s_subscription;

    try {
      s_customer = await Stripe.customers.update(
        user.stripe_cus_id,
        {
          name: request.post().firstname + " " + request.post().lastname,
          source: request.post().token,
        }
      );

      let profile = await user.profile().update({
        first_name: request.post().firstname,
        last_name: request.post().lastname
      });

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

      let source = await Stripe.customers.createSource(
        user.stripe_cus_id, {source: tokenId}
      );
      await Stripe.customers.update(
        user.stripe_cus_id, {default_source: source.id}
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
    } catch (e) {
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

      //await Stripe.subscriptions.del(subId);
      await Stripe.subscriptions.update(
        subId, {cancel_at_period_end: true}
      );

      let s_customer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(s_customer);
    } catch (e) {
      console.log(e);
      return response.status(500).json(e);
    }
  }
}

module.exports = PaymentController;
