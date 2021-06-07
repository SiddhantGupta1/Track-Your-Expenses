import React from 'react'
import './App.css';
import Body from './Body'
import Login from './Login'
import About from './About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  
  return (
    <Router>
      <Switch>
        <div className="App">
           
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home/:query">
            <Body />
          </Route>
          <Route path="/about us" component={About} />
        </div>
    </Switch>
    </Router>
  );
}

export default App;
