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

const rateLimit = (action, arg) => ({ target }) => {
  target.disabled = true;
  action(arg);
  setTimeout(() => target.disabled = false, 300);
};

const MarketDisplay = props => {
  const addCard = rateLimit(props.addCard, props.id);
  const deleteCard = rateLimit(props.deleteCard, props.id);
  return (
    <div className="marketBox">
      <LabeledText label="Market ID" text={props.id} />
      <LabeledText label="Location" text={props.location} />
      <LabeledText label="Cards" text={props.cards} />
      <LabeledText label="% of total" text={props.percentage} />
      <button onClick={addCard}>+</button>
      <button onClick={deleteCard}>-</button>
    </div>
  );
};

export default MarketDisplay;
