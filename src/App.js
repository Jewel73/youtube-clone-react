import React from 'react';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Recommendation from './components/Recommendation'
import SearchPage from './components/SearchPage'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
    	<Router>
      <Header />
    		<Switch>
          <Route path="/search/:searchTerm">
            <div className="content">
              <Sidebar className="first__content"/>
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="content">
              <Sidebar className="first__content"/>
              <Recommendation />
            </div>
          </Route>
    		</Switch>
    	</Router>
      
    </div>
  );
}

export default App;

