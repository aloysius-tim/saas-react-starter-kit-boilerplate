import fetch from '../../tools/fetch';
import config from '../config';

export default class StripeService {
  constructor() {
    this.domain = config.api.serverUrl;
    console.log(this.domain)
  }

  *subscribe(paymentRequest) {
    return yield fetch(`${this.domain}/payment/subscription`, {
      method: 'POST',
      body: JSON.stringify(paymentRequest),
    });
  }

  *customer() {
    return yield fetch(`${this.domain}/payment/customer/me`, {
      method: 'GET',
    });
  }

  *newCard(tokenId) {
    return yield fetch(`${this.domain}/payment/card/new/${tokenId}`, {
      method: 'GET',
    });
  }

  *setDefaultCard(cardId) {
    return yield fetch(`${this.domain}/payment/card/default/${cardId}`, {
      method: 'GET',
    });
  }

  *deleteCard(cardId) {
    return yield fetch(`${this.domain}/payment/card/delete/${cardId}`, {
      method: 'GET',
    });
  }

  *cancelSub(subId) {
    return yield fetch(`${this.domain}/payment/subscription/cancel/${subId}`, {
      method: 'GET',
    });
  }

  *getInvoices() {
    return yield fetch(`${this.domain}/payment/customer/invoices`, {
      method: 'GET',
    });
  }
}
