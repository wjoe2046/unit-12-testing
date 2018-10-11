/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketsDisplay.jsx';

const mapStateToProps = store => store

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        <MarketCreator
          newLocation={this.props.markets.newLocation}
          updateLocation={this.props.actions.newLocation}
          addMarket={this.props.actions.addMarket}
        />
        <MarketsDisplay
          totalCards={this.props.markets.totalCards}
          marketList={this.props.markets.marketList}
          addCard={this.props.actions.addCard}
          deleteCard={this.props.actions.deleteCard}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
