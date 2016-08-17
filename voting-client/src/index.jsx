import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

import './index.css';

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('root')
);
