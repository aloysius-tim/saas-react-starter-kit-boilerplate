import {CONST} from "../../env";
import fetch from "../../tools/fetch"

export default class StripeService {
  constructor() {
    this.domain = CONST.apiUrl;
  }

  *subscribe(paymentRequest) {
    const data = yield fetch(`${this.domain}/payment/subscribe`, {
      method: 'POST',
      body: JSON.stringify(paymentRequest)
    });

    console.log(data);

    return data;
  }

  *customer() {
    return yield fetch(`${this.domain}/payment/customer/me`, {
      method: 'GET',
    });
  }

  *newCard(token) {
    return yield fetch(`${this.domain}/payment/newCreditCard`, {
      method: 'POST',
      body: JSON.stringify({token})
    });
  }
}
