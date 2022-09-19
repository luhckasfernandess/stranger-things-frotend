import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const { REACT_APP_ON_DEVELOPMENT } = process.env;

function App() {
  return (
    <div className="App">
      { REACT_APP_ON_DEVELOPMENT === 'true' && <h3>Em desenvolvimento</h3> }
      <StrangerThings />
    </div>
  );
}

export default App;
