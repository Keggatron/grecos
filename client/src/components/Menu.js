import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecialty } from '../actions/index';
import _ from 'lodash';

class Menu extends Component {
  constructor(props) {
    super(props);
    
    this.renderSpecialty = this.renderSpecialty.bind(this);
  }
  
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
            <td className="table-price" rowSpan="2">${pizza.priceSm}</td>
            <td className="table-price" rowSpan="2">${pizza.priceMed}</td>
            <td className="table-price" rowSpan="2">${pizza.priceLg}</td>
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
      <div className="container">
        <h1 className="headings"> Specialty Pizzas</h1>
        <hr className="line-break" />
        
        <table className="ingredient-table">
          <thead>
            <tr className="table-headings">
              <th className="col-xs-6 table-title">Title</th>
              <th className="col-xs-6 table-price" colSpan="3">Price</th>
            </tr>
            <tr className="table-subheadings">
              <th >
                Ingredients
                <hr align="left" className="line-break" />
              </th>
              <th className="table-price">
                Small
                <hr className="line-break" />
              </th>
              <th className="table-price">
                Medium
                <hr className="line-break" />
              </th>
              <th className="table-price">
                Large
                <hr className="line-break" />
              </th>
            </tr>
          </thead>
          
            {this.renderSpecialty()}
          
        </table>
        
        <h1 className="headings"> Build Your Own </h1>
        <hr className="line-break" />
        <table className="table-subheadings ingredient-table">
          <tr>
            <td className="table-headings">Meats</td>
          </tr>
          <tr className="table-price">
            <td>pepperoni</td>
            <td>crumbled meatball</td>
            <td>italian sausage</td>
            <td>smoked ham</td>
          </tr>
          <tr className="table-price">
            <td>smoked bacon</td>
            <td>salami</td>
            <td>grilled chicken</td>
            <td>beef</td>
          </tr>
          <tr>
            <td className="table-headings">Veggies</td>
          </tr>
          <tr className="table-price">
            <td>red onion</td>
            <td>tomatoes</td>
            <td>olives</td>
            <td>arugula</td>
          </tr>
          <tr className="table-price">
            <td>basil</td>
            <td>green peppers</td>
            <td>banana peppers</td>
            <td>spinach</td>
          </tr>
          <tr className="table-price">
            <td>pineapple</td>
            <td>roasted red peppers</td>
            <td>mushroom</td>
            <td>chopped garlic</td>
          </tr>
          <tr>
            <td className="table-headings">Cheeses</td>
          </tr>
          <tr className="table-price">
            <td>fresh mozzarella</td>
            <td>gorgonzola</td>
            <td>parmesan</td>
            <td>feta</td>
          </tr>
        </table>
        <div className="footer"></div>
      </div>  
    )
  }
}

function mapStateToProps(state) {
  return {
    pizzas: state.specialtyPizza
  }
}

export default connect(mapStateToProps, { fetchSpecialty })(Menu); 