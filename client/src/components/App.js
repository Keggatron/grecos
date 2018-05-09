import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from './navbar';
import Landing from './Landing';
import Pizzeria from './Pizzeria';
import Menu from './Menu';
import OrderForm from '../containers/Order';
import OrderSummary from './OrderSummary';
import Admin from './Admin';
import io from 'socket.io-client'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>  
          <NavBar />
          <Route exact path='/' component={Landing} />
          <Route path='/pizzeria' component={Pizzeria} />
          <Route path='/menu' component={Menu} />
          <Route path='/order' render={props => <OrderForm{...props} /> } />
          <Route path='/ordersummary' component={ OrderSummary } />
          <Route exact path='/admin' component={ Admin } />
        </div>  
      </BrowserRouter>
    )
  }
}

export default App;

