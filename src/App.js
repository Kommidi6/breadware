import React, { Component } from 'react';
import  './components/style.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./components/Login";
import Todos from "./components/Todos";
import Navigation from "./components/Navigation";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/todos" component={Todos}  />
          <Route component={Login}  />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
