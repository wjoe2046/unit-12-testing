/**
 * ************************************
 *
 * @module  MarketDisplay
 * @author
 * @date
 * @description presentation component that renders a single box for each market
 *
 * ************************************
 */

import React from 'react';

const MarketDisplay = (props) => {
  return (
  <div className="marketBox">
    <p><strong>Market ID:</strong> {props.marketId}</p>
    <p><strong>Location:</strong> {props.location}</p>
    <p><strong>Cards:</strong> {props.cards}</p>
    <p><strong>% of total:</strong> {props.percentage}</p>
    <button onClick={() => props.addCard(props.marketId)}>Add Card</button>
    <button onClick={() => props.deleteCard(props.marketId)}>Delete Card</button>
  </div>
)};

export default MarketDisplay;
