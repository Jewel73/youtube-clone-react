import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Recommendation from './components/Recommendation'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        {/* <Sidebar className="first__content"/>
        <Recommendation className="second__content"/> */}
      </div>
    </div>
  );
}

export default App;
