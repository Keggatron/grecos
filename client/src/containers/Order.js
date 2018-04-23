import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OrderType from '../components/OrderType'
import OrderChoices from './OrderChoices'
import OrderTotal from '../components/OrderTotal'
import { createOrder } from '../actions/index'

class OrderForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: 1,
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  nextPage() {
    const { page } = this.state;
    
    this.setState({ page: page + 1 });
  };
  
  previousPage() {
    const { page } = this.state;
    
    this.setState({ page: this.state.page -1 })
  }
  
  onSubmit(values, dispatch, props) {
    return dispatch(createOrder(values))
    .then(() => {
      this.props.history.push('/');
    });
  }
  
  render() {
    const { handleSubmit } = this.props
    const { onSubmit } = this.props
    const { page } = this.state
    
    return(
      <div>
  
        {page === 1 && (
          <OrderChoices
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <OrderTotal
            previousPage={this.previousPage}
            onSubmit={this.onSubmit}
          />
        )}
        
      </div>  
    );
  }
}

OrderForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default OrderForm;