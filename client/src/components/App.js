import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from './navbar';
import Landing from './Landing';
import Pizzeria from './Pizzeria';
import Menu from './Menu';
import OrderForm from '../containers/Order';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>  
          <NavBar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/pizzeria' component={Pizzeria} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/order' render={props => <OrderForm{...props} /> } />
        </div>  
      </BrowserRouter>
    )
  }
}

export default App;

