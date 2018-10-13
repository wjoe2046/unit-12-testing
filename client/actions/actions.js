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

export const addCard = id => ({
  type: types.ADD_CARD,
  payload: id,
});

export const deleteCard = id => ({
  type: types.DELETE_CARD,
  payload: id,
});

export function addMarket() {
  return async (dispatch, getState) => {
    const newMarket = {
      location: getState().markets.newLocation,
      cards: 0,
    };
    try {
      const { data } = await axios.post('/markets', newMarket);
      dispatch({
        type: types.ADD_MARKET,
        payload: data,
      });
    } catch (err) {
      console.error({ err });
    }
  };
}


export const updateLocation = data => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});
