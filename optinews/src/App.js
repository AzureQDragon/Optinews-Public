import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/" component={Home}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
