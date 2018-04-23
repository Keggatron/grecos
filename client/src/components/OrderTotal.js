import React, { Component } from 'react';
import validate from '../validate';
import { connect } from 'react-redux';
import { Field, reduxForm, values, getFormValues, formValueSelector } from 'redux-form';
import renderField from '../renderField';
import {formValues } from 'redux-form';


const viewFormValues = () => {
  console.log('formValues',formValues)
}


const FetchValues = connect(state => ({
    values: getFormValues('wizard')(state),
  }))(({ values }) => {
    console.log(values)
    const pizzaSpecs = values.pizzas;
    
    const pizzaOrder = pizzaSpecs.map((pizza, i) => {
      return (
        <div>  
          {pizzaSpecs[i].size}
          <br></br>
          {pizzaSpecs[i].toppings.join(", ")}
        </div>
      );
    });
    
    return(
      <div>
        <div>
          Your {values.order} order: {pizzaOrder}
        </div>
      </div>
  );
});
  
const OrderTotal = props => {
  const { handleSubmit, previousPage, submitting } = props;
  return (
    <div>
      <FetchValues />
      
      <form onSubmit={handleSubmit}>
        <Field 
          name="nameOnOrder"
          type="text"
          component={renderField}
          label="Full Name"
        />
        <Field
          name="addressOnOrder"
          type="text"
          component={renderField}
          label="Address"
        />
        <Field
          name="phoneNumber"
          type="text"
          component={renderField}
          label="Phone Number"
        />
        <Field name="paymentOption" type="radio" component={renderField} label="Credit Card" value="credit" onSelect={viewFormValues}/>
        <Field name="paymentOption" type="radio" component={renderField} label="Debit" value="debit"/>
        <Field name="paymentOption" type="radio" component={renderField} label="Cash" value="cash"/>
      
        
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={submitting}>Order</button>
        </div>
      </form>
      
    </div>
  );
};


export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(OrderTotal);

