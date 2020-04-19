import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route 
            exact
            path="/login"
            component={LoginPage}
        />
        <Route 
            exact
            path="/"
            component ={MenuPage}
        />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
