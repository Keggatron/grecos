import React, { Component } from 'react';

import GoogleMap from './GoogleMap';

class Pizzeria extends Component {
  
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="headings"> The Skinny </h1>
          <hr className="line-break" />
          <div className="row pizzeria-info">  
          
            <div className="col-xs-6">
              <img className="pizzeria-pic" src="https://cdn.pixabay.com/photo/2017/07/25/09/08/pizza-oven-2537308_960_720.jpg"/>
            </div>
            
            <div className="col-xs-6">
              <p className="blurbs">
                Here at Greco's we believe that the best tasting pizza comes from using the freshest ingredients. Using dough made fresh daily as well as mozzarella made in store, 
                Greco's provides the freshest and best tasting pizza in town. 
                <br />
                <br />
                As for toppings... We have taken painstaking steps to source the finest vendors, all in an effort to give you the best
                pizza experience you're going to get. If you haven't tried Greco's yet, you don't know what you're missing out on!
              </p>
            </div>
          </div> 
          
          
            <h3 id="pizza-info">
              Location & Hours of Operation
            </h3>
            <hr className="line-break" />
          
          <div className="row pizzeria-info">
            
            <div className="col-xs-6" className="blurbs hours">
              Monday to Thursday    Noon - 11 PM
              <br />
              <br />
              Friday & Saturday     Noon - 2 AM
              <br />
              <br />
              Sunday                2 PM - 10 PM
            </div>
            <div className="col-xs-6" className="blurbs hours">
              <GoogleMap />
            </div>
          </div>
            
           
        </div>
        
      </div>
    )
  }
  
}



export default Pizzeria;