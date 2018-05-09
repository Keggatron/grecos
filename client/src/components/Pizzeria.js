import React, { Component } from 'react';
import picture from '../images/pizza-oven.jpg'
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
              <img className="pizzeria-pic" src={picture} alt='pizza in fireplace'/>
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
            
            <div className="col-xs-6 blurbs hours">
              Monday to Thursday    Noon - 11 PM
              <br />
              <br />
              Friday & Saturday     Noon - 2 AM
              <br />
              <br />
              Sunday                2 PM - 10 PM
            </div>
            
              <GoogleMap />
            
          </div>
            
           
        </div>
        
      </div>
    )
  }
  
}



export default Pizzeria;