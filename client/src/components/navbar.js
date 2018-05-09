import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  
  
  render() {
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark label">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link 
              to="/"
              className='nav-link'
            > 
              Greco's Pizza
            </Link>
          </li>
        </ul>  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#grec-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>    
            
        <div className="navbar-collapse collapse" id="grec-menu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link 
              to="/pizzeria"
              className='nav-link'
            > 
              Pizzeria
            </Link>  
            </li>
            <li className="nav-item">
            <Link 
              to="/menu"
              className='nav-link'
            > 
              Menu
            </Link>
            </li>
            <li className="nav-item">
            <Link 
              to="/order"
              className='nav-link'
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