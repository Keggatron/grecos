import React, { Component } from 'react';
import picture from '../images/main-pizza.jpeg'

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container landing-snippet">
          <h1 className="headings">
            At Greco's, Fresh is king
          </h1>
        </div>
        <div className="container">
          <img className='hero-picture' src={picture} alt='pizza'/>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default Landing;