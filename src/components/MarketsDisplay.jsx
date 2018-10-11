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
import MarketDisplay from './MarketDisplay.jsx';


const MarketsDisplay = (props) => {
  const percentOfTotal = (cardCount) => {
    if (cardCount === 0) return 0
    return ((cardCount / props.totalCards) * 100).toFixed(2);
  }

  const marketMaker = (market) => {
    return (
      <MarketDisplay
        marketId={market.marketId}
        location={market.location}
        cards={market.cards}
        key={market.marketId}
        percentage={percentOfTotal(market.cards)}
        addCard={props.addCard}
        deleteCard={props.deleteCard}
      />
    )
  }

  return(
    <div className="displayBox">
      <h4>Markets</h4>
      <div>
        {props.marketList.map((market) => marketMaker(market))}
      </div>
    </div>
  );
};

export default MarketsDisplay;
