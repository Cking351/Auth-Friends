import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Authorized Friends!</h1>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/protected'>Friends</Link>
        </li>
      </header>
      <div>
      <Switch>
          <PrivateRoute exact path="/protected" component={Friends}/>
          <Route path="/login" component={Login} />{" "}
          {/* history, match, location */}
          <Route component={Login} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
