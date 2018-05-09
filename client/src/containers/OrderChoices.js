import React, { Component } from 'react';
import validate from '../validate';
import { Field, FieldArray, reduxForm } from 'redux-form';
import Toppings from '../components/Toppings';
import SpecialtyPizzas from '../components/Specialty';
import {SizeSelect} from '../components/sizeSelect'
import renderField from '../renderField';

const renderError = ({ meta: {touched, error } }) => {
  return touched && error ? <span>{error}</span> : false
}  

const sizeOptions = [
    { label: 'Select a size' },
    { id: 1, label: 'Small', category:'small', price:12.50 },
    { id: 2, label: 'Medium', category:'medium', price:14.50 },
    { id: 3, label: 'Large', category:'large', price:16.50 },
  ];

const renderPizzas = ({ fields, meta: { touched, error, submitFailed } }) => {
  
    return (
    <ul id="order-ul">
      <li>
        <button type="button" onClick={() => fields.push({})}> Add Pizza </button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((pizza, index) => {
      return(
        <li key={index}>
          
          
          <h4>Pizza #{index + 1}</h4>
          <div className="row">
            <div className="col-xs-2">
              <Field name={`${pizza}.details`} component={SizeSelect} options={sizeOptions} />
              <Field name='details' component={renderError} />
            </div>
            <div className="col-xs-10"> 
              <Toppings fieldName={`${pizza}.toppings`} /> 
            </div>  
              <button 
                type="button"
                title="Remove Pizza"
                onClick={() => fields.remove(index)}
              >Remove</button>
              
          </div>
        </li>
      )})}
    </ul>
    )
}

const OrderChoices  = props => {
  const { handleSubmit, pristine, reset, submitting, previousPage } = props;
  return (
    <div className="choices">
    <form onSubmit={handleSubmit}>
      <label>Select the type of order to make:</label>
      <div className='row'>
        <Field name="order" component={renderField} type="radio" value='delivery' />{' '} <h3>Delivery</h3>
      </div>
      <div className='row'>
        <Field name="order" component={renderField} type="radio" value='takeout'  />{' '} <h3>Takeout</h3>
        <Field name="order" component={renderError} />
      </div>
      <FieldArray name="pizzas" component={renderPizzas} />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
    </div>
  )
}


export default reduxForm({
  form: 'wizard',
  initialValues: { pizzas: '' },
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(
  OrderChoices
);