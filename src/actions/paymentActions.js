/* eslint-disable import/prefer-default-export */

import {PAYMENT_REQUEST, FETCH_CUSTOMER, NEW_CARD_REQUEST} from "../constants";

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

export function addNewCardAction(token_id) {
  return {
    type: NEW_CARD_REQUEST.TRIGGER,
    payload: {token: token_id},
  };
}
