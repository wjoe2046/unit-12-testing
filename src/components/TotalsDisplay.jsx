/**
 * ************************************
 *
 * @module  TotalsDisplay
 * @author
 * @date
 * @description presentation component that displays the total cards and total markets
 *
 * ************************************
 */

import React from 'react';
import LabeledText from './LabeledText';

const TotalsDisplay = ({ totalCards, totalMarkets }) => (
  <div className="innerbox" id="totals">
    <LabeledText label="Total Cards" text={totalCards} />
    <LabeledText label="Total Markets" text={totalMarkets} />
  </div>
);
export default TotalsDisplay;
