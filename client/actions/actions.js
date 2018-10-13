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

export const addCard = id => dispatch => {
  axios.patch(`/markets/${id}`, { cards: 1 })
    .then(({ status }) => {
      if (status === 200) {
        dispatch({ type: types.ADD_CARD, payload: id });
      }
    })
    .catch(console.error);
};

export const deleteCard = id => dispatch => {
  axios.patch(`/markets/${id}`, { cards: -1 })
    .then(({ status }) => {
      if (status === 200) {
        dispatch({ type: types.DELETE_CARD, payload: id });
      }
    })
    .catch(console.error);
};

export const addMarket = () => (dispatch, getState) => {
  axios.post('/markets', {
    location: getState().markets.newLocation,
    cards: 0,
  })
    .then(({ data }) => dispatch({ type: types.ADD_MARKET, payload: data }))
    .catch(console.error);
};
