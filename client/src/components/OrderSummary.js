import React, { Component } from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const summary = this.props.location.state.referrer
    
    
    
    return (
      <div className="total">
        <h1 className="headings">
          Thank you!
        </h1>
        <h1> Order Summary </h1>
        <div> <strong>Name: </strong>{summary.nameOnOrder} </div>
        <div> <strong>Address: </strong>{summary.addressOnOrder} </div>  
        <div> <strong>Date: </strong>{summary.orderDate} </div>      
            
        <div> <strong>Phone Number: </strong>{summary.orderPhoneNumber} </div>      
        <div> <strong>Price: </strong>{summary.orderPrice} </div>      
        <div> <strong>Type of Order: </strong>{summary.orderType} </div>      
        <div> <strong>Payment Option: </strong>{summary.paymentOption} </div>    
      </div>  
    )
  }
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true
})(OrderSummary);
