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

import axios from 'axios';
import * as types from '../constants/actionTypes';

export const updateLocation = data => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});

export const addCard = id => ({
  type: types.ADD_CARD,
  payload: id,
});

export const deleteCard = id => (dispatch, getState) => {
  if (getState().markets.marketList[id].cards > 0) {
    dispatch({ type: types.DELETE_CARD, payload: id });
  }
};

export const addMarket = event => (dispatch, getState) => {
  event.preventDefault();
  const location = getState().markets.newLocation;
  if (location) {
    dispatch({
      type: types.ADD_MARKET,
      payload: { location, cards: 0 },
    });
  }
};
