/**
 * ************************************
 *
 * @module  MarketsDisplay
 * @author
 * @date
 * @description presentation component that renders n MarketDisplay components
 *
 * ************************************
 */

import React from 'react';
import MarketDisplay from './MarketDisplay';

const percentOfTotal = (cardCount, total) => (
  cardCount ? ((cardCount / total) * 100).toFixed(2) : 0);

const marketMaker = (market, props) => (
  <MarketDisplay
    {...market}
    key={market.id}
    percentage={percentOfTotal(market.cards, props.totalCards)}
    addCard={props.addCard}
    deleteCard={props.deleteCard}
  />
);

const MarketsDisplay = props => (
  <div className="displayBox">
    <h4>Markets</h4>
    <div className="allMarkets">
      {props.marketList.map(market => marketMaker(market, props))}
    </div>
  </div>
);

export default MarketsDisplay;
