import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchSpecialty } from '../actions/index';
import validate from '../validate';
import _ from 'lodash';

class SpecialtyPizzas extends Component {
  
  
  componentDidMount() {
    this.props.fetchSpecialty()
  }
  
  renderSpecialty() {
    return _.map(this.props.pizzas, pizza => {
      return (
        <tbody>
          <tr key={pizza.pizzaTitle} className="pizza-row">
            <td className ="table-subheadings">
              {pizza.pizzaTitle}
            </td>
            <td className="table-price" rowSpan="2"><button>${pizza.priceSm}</button></td>
            <td className="table-price" rowSpan="2"><button>${pizza.priceMed}</button></td>
            <td className="table-price" rowSpan="2"><button>${pizza.priceLg}</button></td>
          </tr>
          <tr key={pizza._id} className="pizza-row">
            <td>
              {pizza.ingredients.join(", ")}
            </td>
          </tr>
        </tbody>
      )
    })
  }
  
  render() {
    return (
      <div>
        {this.renderSpecialty()}
      </div>  
    )
  }
  
}

function mapStateToProps(state) {
  return {
    pizzas: state.specialtyPizza
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(
  connect(mapStateToProps, { fetchSpecialty })(SpecialtyPizzas)
);