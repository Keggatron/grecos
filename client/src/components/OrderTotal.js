import React from 'react';
import validate from '../validate';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';
import renderField from '../renderField';
import {formValues } from 'redux-form';


const viewFormValues = () => {
  console.log(formValues)
}


const FetchValues = connect(state => ({
    values: getFormValues('wizard')(state),
  }))(({ values }) => {
    console.log(values)
    const pizzaSpecs = values.pizzas;
    var prices = []
    const getPrices = pizzaSpecs.map((pizza, i) => {
      prices.push(pizza.details.price);
      prices.push(pizza.toppings.length * 1.5);
    });
    
    const pizzaTotal = prices.reduce((a,b) => a+b, 0);
    
    values.orderPrice = pizzaTotal;
    
    const pizzaOrder = pizzaSpecs.map((pizza, i) => {
      return (
        <div key={i}>  
          Pizza #{i + 1}: <strong>{pizzaSpecs[i].details.label}
          <br></br>
          {pizzaSpecs[i].toppings.join(", ")}
          </strong>
        </div>
      );
    });
    
    return(
      <div>
        <div className="total">
          Your <strong>{values.order}</strong> order: {pizzaOrder}
          <br/>
          Your total comes to: <strong>${pizzaTotal}</strong>
          
        </div>
      </div>
  );
});
  
const OrderTotal = props => {
  const { handleSubmit, previousPage, submitting } = props;
  return (
    <div>
      <FetchValues />
      <div className="container">
      <form onSubmit={handleSubmit}>
        <Field 
          name="nameOnOrder"
          type="text"
          component={renderField}
          label="Full Name"
          className="form-control"
        />
        <Field
          name="addressOnOrder"
          type="text"
          component={renderField}
          label="Address"
          className="form-control"
        />
        <Field
          name="phoneNumber"
          type="text"
          component={renderField}
          label="Phone Number"
          className="form-control"
        />
        <Field name="paymentOption" type="radio" component={renderField} value="credit"/><h3>Credit Card</h3>
        <Field name="paymentOption" type="radio" component={renderField} value="debit"/><h3>Debit</h3>
        <Field name="paymentOption" type="radio" component={renderField} value="cash"/><h3>Cash</h3>
      
        
        <div>
          <button type="button" className="previous button" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" disabled={submitting} className='button'>Order</button>
        </div>
      </form>
      </div>
    </div>
  );
};


export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(OrderTotal);

