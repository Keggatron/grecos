import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import validate from '../validate';

const renderError = ({ meta: { touched, error }}) =>
  touched && error ? <span>{error}</span> : false;

const OrderType = props => {
  const { handleSubmit } = props
  const styles = {
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      
      <div>
        <button type="submit" className="button">Next</button>
      </div>
    </form>
    </div>

  )

  
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(OrderType);