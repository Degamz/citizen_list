import React from 'react';
import Citizens from './components/Citizens';
import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Citizen List</h1>
      <Citizens />
    </div>
  );
};

export default App;
