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

const marketsReducer = (state=initialState, action) => {
  let marketList;

  switch(action.type) {
    case types.ADD_MARKET: {
      // increment lastMarketId and totalMarkets counters
      let { lastMarketId, totalMarkets } = state;
      lastMarketId += 1;
      totalMarkets += 1;

      // create the new market object from provided data
      const newMarket = {
        marketId: lastMarketId,
        location: state.newLocation,
        cards: 0,
      };

      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };
    }

    case types.NEW_LOCATION:
      return {
        ...state,
        newLocation: action.payload,
      };

    case types.ADD_CARD: {
      const newMarketList = state.marketList.slice();
      newMarketList.forEach((market) => {
        if (market.marketId === action.payload) {
          market.cards += 1;
        }
      });
      return {
        ...state,
        totalCards: state.totalCards + 1,
        marketList: newMarketList,
      }
    }

    case types.DELETE_CARD: {
      const newMarketList = state.marketList.slice();
      for (let i = 0; i < newMarketList.length; i += 1) {
        if (newMarketList[i].marketId === action.payload) {
          if (newMarketList[i].cards === 0) return state;
          newMarketList[i].cards -= 1;
        }
      }
      return {
        ...state,
        totalCards: state.totalCards - 1,
        marketList: newMarketList,
      }
    }

    default:
      return state;
  }
};

export default marketsReducer;
