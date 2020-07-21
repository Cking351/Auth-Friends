import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
//import Friends from './components/Friends';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Authorized Friends!</h1>
      </header>
      <div>
        <Login />
    
      </div>
    </div>
  );
}

export default App;
