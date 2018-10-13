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
    <form onSubmit={addMarket}>
      <input
        value={newLocation}
        onChange={e => updateLocation(e.target.value)}
      />
      <button type="submit">Add Market</button>
    </form>
  </div>
);

export default MarketCreator;
