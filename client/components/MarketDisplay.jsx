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
import LabeledText from './LabeledText';

const MarketDisplay = props => (
  <div className="marketBox">
    <LabeledText label="Market ID" text={props.id} />
    <LabeledText label="Location" text={props.location} />
    <LabeledText label="Cards" text={props.cards} />
    <LabeledText label="% of total" text={props.percentage} />
    <button onClick={() => props.addCard(props.id)}>+</button>
    <button onClick={() => props.deleteCard(props.id)}>-</button>
  </div>
);

export default MarketDisplay;
