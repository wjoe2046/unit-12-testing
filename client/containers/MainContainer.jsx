/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay';
import MarketsContainer from './MarketsContainer';

const mapStateToProps = ({ markets: { totalCards, totalMarkets } }) => ({
  totalCards,
  totalMarkets,
});

const MainContainer = ({ totalCards, totalMarkets }) => (
  <div className="container">
    <div className="outerBox">
      <h1 id="header">MegaMarket Loyalty Cards</h1>
      <TotalsDisplay totalCards={totalCards} totalMarkets={totalMarkets} />
      <MarketsContainer />
    </div>
  </div>
);

export default connect(mapStateToProps)(MainContainer);
