import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../renderField';
import validate from '../validate';

const renderError = ({ meta: { touched, error }}) =>
  touched && error ? <span>{error}</span> : false;

const OrderType = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select the type of order to make:</label>
        <div>
          <label>
            <Field name="delivery" component="input" type="radio" value='true'  />
            {' '}
            Delivery
          </label>
          <label>
            <Field name="delivery" component="input" type="radio" value='false' />
            {' '}
            Takeout
          </label>
          <Field name="delivery" component={renderError} />
        </div>
      </div>
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>

  )

  
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(OrderType);