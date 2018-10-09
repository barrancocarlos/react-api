import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from "./components/Home.js";
import Create from "./components/Create.js";
import Single from "./components/Single.js";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/single/:id' component={Single}/>                           
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;