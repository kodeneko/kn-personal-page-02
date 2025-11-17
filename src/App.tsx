
import './i18n';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './routing';

const App: React.FC = () => (
  <Router>
    <Routing />
  </Router>
);

export default App;
