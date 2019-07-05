import {CONST} from "../../env";
import fetch from "../../tools/fetch"

export default class StripeService {
  constructor() {
    this.domain = CONST.apiUrl;
  }

  *subscribe(paymentRequest) {
    console.log("Subscribe service", paymentRequest);

    const data = yield fetch(`${this.domain}/payment/subscribe`, {
      method: 'POST',
      body: JSON.stringify(paymentRequest)
    });

    console.log(data);

    return data;
  }
}
