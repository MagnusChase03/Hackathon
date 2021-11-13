import './App.css';
import React from 'react';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Team Won" />
      </header>
    </div>
  );
}

export default App;
