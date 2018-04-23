import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-collapse collapse label">
          <ul className="navbar-nav">
            <li className="navbar-item">
            <Link 
              to="/"
              className='header-link'
            > 
              Greco's Pizza
            </Link>
            </li>
            <li className="navbar-item">
            <Link 
              to="/pizzeria"
              className='header-link'
            > 
              Pizzeria
            </Link>  
            </li>
            <li className="navbar-item">
            <Link 
              to="/menu"
              className='header-link'
            > 
              Menu
            </Link>
            </li>
            <li className="navbar-item">
            <Link 
              to="/order"
              className='header-link'
            > 
              Order Now!
            </Link>
            </li>
          </ul>
            
        </div>
      </nav>
    );
  }
}

export default NavBar;