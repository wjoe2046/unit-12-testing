/**
 * ************************************
 *
 * @module  MarketCreator
 * @author
 * @date
 * @description presentation component that takes user input for new market creation
 *
 * ************************************
 */

import React from 'react';

const MarketCreator = props => (
  // how do we create the circuit between the store and an input field?
  // how do we update the store from a presentation component?
  <div>
    <input value={props.newLocation} onChange={(event) => props.updateLocation(event.target.value)} />
    <button onClick={props.addMarket} >Add Market</button>
  </div>
);

export default MarketCreator;
