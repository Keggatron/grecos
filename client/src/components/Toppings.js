import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchToppings } from '../actions/index';
import validate from '../validate';
import _ from 'lodash';
import CheckBoxGroup from '../checkBoxGroup';


class Toppings extends Component {
  componentDidMount() {
    this.props.fetchToppings();
  }
  
  
 
  render() {
    const options = _.map(this.props.toppings, topping => ({label:topping.toppingName , value:topping.toppingName}));
    
      
    return (
          
          <CheckBoxGroup options={options} name={this.props.fieldName} className='col-xs-3'/> 
          
    );
  }
}

function mapStateToProps(state) {
  return {
      toppings: state.toppings
  };
}

export default 
    connect(mapStateToProps, { fetchToppings })(Toppings)

  
