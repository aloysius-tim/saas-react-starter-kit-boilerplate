/* eslint-disable import/prefer-default-export */

import {
  PAYMENT_REQUEST,
  FETCH_CUSTOMER,
  NEW_CARD_REQUEST,
  SET_DEFAULT_CARD,
  DELETE_CARD,
  CANCEL_SUBSCRIPTION
} from "../constants";

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

export function addNewCardAction(tokenId) {
  return {
    type: NEW_CARD_REQUEST.TRIGGER,
    payload: {token: tokenId},
  };
}

export function setDefaultCardAction(cardId) {
  return {
    type: SET_DEFAULT_CARD.TRIGGER,
    payload: {cardId},
  };
}

export function deleteCardAction(cardId) {
  return {
    type: DELETE_CARD.TRIGGER,
    payload: {cardId},
  };
}

export function cancelSubscriptionAction(subId) {
  return {
    type: CANCEL_SUBSCRIPTION.TRIGGER,
    payload: {subId},
  };
}
