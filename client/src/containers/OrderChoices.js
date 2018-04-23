import React, { Component } from 'react';
import validate from '../validate';
import { Field, FieldArray, reduxForm, formValueSelector, formValues, getFormValues } from 'redux-form';
import Toppings from '../components/Toppings';
import SpecialtyPizzas from '../components/Specialty';
import renderField from '../renderField';
import { connect } from 'react-redux';


const addToTotal = (pizzaPrice) => {
  
}



const renderPizzas = ({ fields, meta: { touched, error, submitFailed } }) => {
  
    return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}> Add Pizza </button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
      {fields.map((pizza, index) => {
      return(
        <li key={index}>
          <button 
            type="button"
            title="Remove Pizza"
            onClick={() => fields.remove(index)}
          >Remove</button>
          
          <h4>Pizza #{index + 1}</h4>
          <Field name={`${pizza}.size`} type="radio" value={"small"} label="Small" component={renderField} />
          <Field name={`${pizza}.size`} type="radio" value={"medium"} label="Medium" component={renderField} />
          <Field name={`${pizza}.size`} type="radio" value={"large"} label="Large" component={renderField} />
          <Toppings fieldName={`${pizza}.toppings`}/> 
          
        </li>
      )})}
    </ul>
    )
}

const OrderChoices = props => {
  const { handleSubmit, pristine, reset, submitting, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>Select the type of order to make:</label>
      <div>
        <Field name="order" component={renderField} type="radio" value='delivery' label="Delivery" />
        <Field name="order" component={renderField} type="radio" value='takeout' label="Takeout" />
      </div>
      <FieldArray name="pizzas" component={renderPizzas} />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}


export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(
  OrderChoices
);