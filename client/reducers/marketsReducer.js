/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MARKET:
      return {
        ...state,
        marketList: state.marketList.concat(action.payload),
        totalMarkets: state.totalMarkets + 1,
        newLocation: '',
      };

    case types.UPDATE_LOCATION:
      return {
        ...state,
        newLocation: action.payload,
      };

    case types.ADD_CARD: {
      const newMarketList = state.marketList.map((market) => {
        if (market.id === action.payload) {
          return {
            ...market,
            cards: market.cards + 1,
          };
        }
        return market;
      });

      return {
        ...state,
        totalCards: state.totalCards + 1,
        marketList: newMarketList,
      };
    }

    case types.DELETE_CARD: {
      const newMarketList = state.marketList.map((market) => {
        if (market.id === action.payload) {
          return {
            ...market,
            cards: market.cards - 1,
          };
        }
        return market;
      });

      return {
        ...state,
        totalCards: state.totalCards - 1,
        marketList: newMarketList,
      };
    }

    default:
      return state;
  }
};

export default marketsReducer;
