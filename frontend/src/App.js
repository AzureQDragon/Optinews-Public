import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/Home" component={Home}>
            <Home />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
