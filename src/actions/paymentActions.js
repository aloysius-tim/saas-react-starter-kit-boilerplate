/* eslint-disable import/prefer-default-export */

import {PAYMENT_REQUEST, FETCH_CUSTOMER} from "../constants";

export function paymentAction(paymentRequest) {
  return {
    type: PAYMENT_REQUEST.TRIGGER,
    payload: paymentRequest,
  };
}

export function fetchCustomerAction() {
  return {
    type: FETCH_CUSTOMER.TRIGGER,
    payload: null,
  };
}
