import { Paper } from '@material-ui/core';
import React from 'react';
import ReactJson from 'react-json-view';
import { SearchTypes } from '../../models/search-types';
import TextResult from '../text-result/text-result.component';
import './results-section.styles.scss';

type OwnProps = {
  type: SearchTypes,
  resultJson: {}
}

const ResultsSection = ({ type, resultJson }: OwnProps) => (
  <Paper className="results-section">
    <div className="result-display">
      <h3>{type.toUpperCase()} Results</h3>
      <TextResult type={type} json={resultJson} />
    </div>
    <div className="result-display">
      <h3>Results JSON</h3>
      <ReactJson src={resultJson} />
    </div>
  </Paper>
);

export default ResultsSection;
