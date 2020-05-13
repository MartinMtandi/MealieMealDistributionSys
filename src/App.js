import React, {useEffect} from 'react'
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
import { connect, useSelector, useDispatch } from 'react-redux';
import { setuser } from './actions/userActions';



function App() {
  const user = useSelector(state => state.user.loggedin)

  useEffect(() => {
  
    const access = localStorage.getItem('access_token')
    if (access) {
      store.dispatch(setuser(access))
    }

  }, [])  
  
  const myhistory = createBrowserHistory();
  return (

     
    <Router history={myhistory}>
    <div className="App">
      {/* <Switch> */}
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
            // render={props => {
            //     return (
            //         {(this.props.users.user) ? <AdminTabs /> : <LoginPage />}
                
            //   )
            // }}
          /*   render={props => {
              return (
                ( 
                  <div>
                    {user.loggedin ?
                      <AdminTabs />
                     : 
                     <LoginPage /> 
                     }
                  </div>
                )
              )
            }} */
  
        />
        <Route 
            exact
            path="/"
            component ={MenuPage}
        />
      {/* </Switch> */}
    </div>
      </Router>
     
  );
}

export default App;
