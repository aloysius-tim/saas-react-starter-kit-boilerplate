/* eslint-disable prefer-destructuring */

'use strict';

const Stripe = use('Stripe');
const moment = use('Moment');

class PaymentController {
  async subscribe ({ request, response, auth }) {
    const user = await auth.getUser();
    const sourceToken = request.post().sourceToken;
    const planId = request.post().planId;
    let sSubscription;
    let sCustomer;

    if (!user.stripe_cus_id)
      return response.status(500).json({ message: 'User is not a Stripe USER' });

    try {
      sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);

      const haveCreditCard = sCustomer.sources.data.length > 0;
      const haveSubscription = sCustomer.subscriptions.data.length > 0;

      /**
       * Case the customer need to add a valid source
       */
      if (!haveCreditCard) {
        if (!sourceToken) {
          return response
            .status(500)
            .json({ message: 'Request should contain a Credit Card source' });
        }

        if (!request.post().lastname && !request.post().firstname) {
          return response
            .status(500)
            .json({ message: 'Request should contain Credit card owner\'s name' });
        }
        console.log('Adding new card');
        // eslint-disable-next-line max-len
        const source = await Stripe.customers.createSource(user.stripe_cus_id, { source: sourceToken });
        sCustomer = await Stripe.customers
          .update(user.stripe_cus_id, {
            default_source: source.id,
            name: `${request.post().firstname} ${request.post().lastname}`
          });
      }

      /**
       * Case the customer Downgrade or Upgrade his plan
       * By default, we prorate subscription changes. For example,
       * if a customer signs up on May 1 for a €100 plan, she'll be billed €100 immediately.
       * If on May 15 she switches to a €200 plan, then on June 1 she'll be billed €250 (€200
       * for a renewal of her subscription, plus a €50 prorating adjustment for half of the
       * previous month's €100 difference).
       * https://stripe.com/docs/api/subscriptions/update
       */
      if (haveSubscription) {
        console.log('Downgrade or Upgrade customer\'s plan');
        sSubscription = await Stripe.subscriptions.update(
          sCustomer.subscriptions.data[0].id,
          {
            cancel_at_period_end: false,
            items: [{
              id: sCustomer.subscriptions.data[0].items.data[0].id,
              plan: planId
            }]
          }
        );
      }

      /**
       * Case the customer subscribe his first plan
       * /!\ In this particular case, user can fraud and subscribe a new trial every 15 days...
       */
      if (!haveSubscription) {
        console.log('Subscribe customer to a plan');
        const sPlan = await Stripe.plans.retrieve(planId);
        sSubscription = await Stripe.subscriptions.create({
          customer: sCustomer.id,
          items: [{ plan: planId }],
          trial_end: moment().add(sPlan.trial_period_days ? sPlan.trial_period_days : 0, 'days').unix()
        });
      }

      sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json({ s_customer: sCustomer, s_subscription: sSubscription });
    } catch (e) {
      console.log(e.message);
      return response.status(500).json(e);
    }
  }

  async subscribeCustomer ({ request, response, auth }) {
    const user = await auth.getUser();
    let sCustomer;
    let sSubscription;

    try {
      sCustomer = await Stripe.customers.update(
        user.stripe_cus_id,
        {
          name: `${request.post().firstname} ${request.post().lastname}`,
          source: request.post().token
        }
      );

      await user.profile().update({
        first_name: request.post().firstname,
        last_name: request.post().lastname
      });

      sSubscription = await Stripe.subscriptions.create({
        customer: sCustomer.id,
        items: [{ plan: request.post().planId }],
        trial_end: moment().add(15, 'days').unix()
      });
    } catch (e) {
      console.log(e.message);
      return response.status(500).json(e);
    }

    return response.status(200).json({ s_customer: sCustomer, s_subscription: sSubscription });
  }

  async setDefaultCard ({ request, response, auth }) {
    const user = await auth.getUser();
    const cardId = request.params.cardId;

    try {
      if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }
      await Stripe.customers.update(user.stripe_cus_id, { default_source: cardId });
      const sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(sCustomer);
    } catch (e) {
      return response.status(500).json(e);
    }
  }

  async newCreditCard ({ request, response, auth }) {
    const user = await auth.getUser();
    const tokenId = request.params.tokenId;

    try {
      if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }

      const source = await Stripe.customers.createSource(user.stripe_cus_id, { source: tokenId });
      await Stripe.customers.update(user.stripe_cus_id, { default_source: source.id });
      const sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(sCustomer);
    } catch (e) {
      return response.status(500).json(e);
    }
  }

  async deleteCard ({ request, response, auth }) {
    const user = await auth.getUser();
    const cardId = request.params.cardId;

    try {
      if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }

      await Stripe.customers.deleteSource(user.stripe_cus_id, cardId);
      const sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(sCustomer);
    } catch (e) {
      console.log(e);
      return response.status(500).json(e);
    }
  }

  async getCustomer ({ response, auth }) {
    const user = await auth.getUser();

    if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }

    const sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);

    return response.status(200).json(sCustomer);
  }

  async cancelSubscription ({ request, response, auth }) {
    const user = await auth.getUser();
    const subId = request.params.subId;

    try {
      if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }

      // await Stripe.subscriptions.del(subId);
      await Stripe.subscriptions.update(subId, { cancel_at_period_end: true });

      const sCustomer = await Stripe.customers.retrieve(user.stripe_cus_id);
      return response.status(200).json(sCustomer);
    } catch (e) {
      console.log(e);
      return response.status(500).json(e);
    }
  }

  async getInvoices ({ response, auth }) {
    const user = await auth.getUser();

    try {
      if (!user.stripe_cus_id) { return response.status(500).json({ message: 'User is not a Stripe USER' }); }

      const invoices = await Stripe.invoices.list({customer: user.stripe_cus_id});

      return response.status(200).json(invoices);
    } catch (e) {
      console.log(e);
      return response.status(500).json(e);
    }
  }

}

module.exports = PaymentController;
