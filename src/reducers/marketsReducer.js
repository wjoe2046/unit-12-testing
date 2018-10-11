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
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET: {
      let { lastMarketId, totalMarkets } = state;
      lastMarketId += 1;
      totalMarkets += 1;

      marketList = state.marketList.concat({
        marketId: lastMarketId,
        location: state.newLocation,
        cards: 0,
      });

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };
    }

    case types.UPDATE_LOCATION:
      return {
        ...state,
        newLocation: action.payload,
      };

    case types.ADD_CARD: {
      const newMarketList = state.marketList.map((market) => {
        if (market.marketId === action.payload) {
          const newMarket = {
            ...market,
            cards: market.cards + 1,
          };
          return newMarket;
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
      let change = 0;
      const newMarketList = state.marketList.map((market) => {
        if (market.marketId === action.payload && market.cards > 0) {
          change = -1;
          return {
            ...market,
            cards: market.cards - 1,
          };
        }
        return market;
      });

      return {
        ...state,
        totalCards: state.totalCards + change,
        marketList: newMarketList,
      };
    }

    default:
      return state;
  }
};

export default marketsReducer;
