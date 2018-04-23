import React, { Component } from 'react';

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
          <img className='hero-picture' src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}

export default Landing;