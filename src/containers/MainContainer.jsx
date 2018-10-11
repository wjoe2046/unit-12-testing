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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import MarketsContainer from '../containers/MarketsContainer.jsx';
import * as actions from '../actions/actions'

const mapStateToProps = store => store

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { markets } = this.props;
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header">MegaMarket Loyalty Cards</h1>
          <TotalsDisplay
            totalCards={markets.totalCards}
            totalMarkets={markets.totalMarkets}
          />
          <MarketsContainer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
