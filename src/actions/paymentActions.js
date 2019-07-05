/* eslint-disable import/prefer-default-export */

import {PAYMENT_REQUEST} from "../constants";

export function paymentAction(paymentRequest) {
  return {
    type: PAYMENT_REQUEST.TRIGGER,
    payload: paymentRequest,
  };
}
