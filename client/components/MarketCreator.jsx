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

const MarketCreator = ({
  newLocation,
  updateLocation,
  addMarket,
}) => (
  <div>
    <input
      value={newLocation}
      onChange={e => updateLocation(e.target.value)}
    />
    <button type="button" onClick={addMarket}>Add Market</button>
  </div>
);

export default MarketCreator;
