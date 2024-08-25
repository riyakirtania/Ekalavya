import React from 'react';
import './App.css';
import Register from './Register'; // Import the Register component
import MainApp from './Components/PM/MainApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Register /> */}
        <MainApp/>
      </header>
    </div>
  );
}

export default App;
