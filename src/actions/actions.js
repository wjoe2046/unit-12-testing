/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes'

export const addCard = (marketId) => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const deleteCard = (marketId) => ({
  type: types.DELETE_CARD,
  payload: marketId,
});

export const addMarket = (marketId) => ({
  type: types.ADD_MARKET,
  payload: marketId,
});

export const newLocation = (data) => ({
  type: types.NEW_LOCATION,
  payload: data,
});

// add more action creators
