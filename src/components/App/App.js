import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import useToken from './useToken';


function App() {
  // in-memory
  // const [token, setToken] = useState();

  //Out-Memory
  //Session Storage
  const {token, setToken } = useToken();


  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>The Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
