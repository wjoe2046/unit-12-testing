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

import * as types from '../constants/actionTypes';

export const addCard = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});

export const deleteCard = marketId => ({
  type: types.DELETE_CARD,
  payload: marketId,
});

export const addMarket = marketId => ({
  type: types.ADD_MARKET,
  payload: marketId,
});

export const updateLocation = data => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});
