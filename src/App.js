import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Provider}  from 'react-redux'

import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import WardScheduleTabs from './pages/WardScheduleTabs'
import DistributionLogTabs from './pages/DistributionLogsTabs'
import AdminTabs from './pages/AdminTabs'
import NewHousehold from './pages/CreateHouseholdPage'

import store from './store'
import './App.css';
import { createBrowserHistory } from 'history';




function App() {

  const myhistory = createBrowserHistory();
  return (
    <Provider store={store}>
    <Router history={myhistory}>
    <div className="App">
      <Switch>
        <Route 
            exact
            path="/login"
            component={LoginPage}
        />
        <Route 
            exact
            path="/schedule"
            component={WardScheduleTabs}
        />
        <Route 
            exact
            path="/distribution"
            component={DistributionLogTabs}
        />
        <Route 
            exact
            path="/create-household"
            component={NewHousehold}
        />
        <Route 
            exact
            path="/dashboard"
            component={AdminTabs}
        />
        <Route 
            exact
            path="/"
            component ={MenuPage}
        />
      </Switch>
    </div>
      </Router>
      </Provider>
  );
}

export default App;
