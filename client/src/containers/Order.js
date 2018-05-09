import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import OrderChoices from './OrderChoices';
import OrderTotal from '../components/OrderTotal';
import { createOrder } from '../actions/index';
import { Redirect } from 'react-router-dom';
import picture from '../images/pizza-on-firewood-furnace.jpg'


let socket

class OrderForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: 1,
      redirect: false
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
    socket = io.connect('https://projects-keggatron1.c9users.io:8081')
    return dispatch(createOrder(values))
    .then(() => {
      socket.emit('newOrder')
    })
    .then(() => {
      this.setState({redirect: true });
    })
   
  }
  
  render() {
    const { handleSubmit } = this.props
    const { onSubmit } = this.props
    const { page } = this.state
    const { redirect } = this.state
    
    if (redirect) {
      // console.log('order',this.props.order)
      return <Redirect to={{
        pathname: '/ordersummary',
        state: { referrer: this.props.order} 
      }}/>
    }
    
    return(
      <div className="order-div">
        <h1 className="headings">
          Order Form
        </h1>
        <div>
          <img className='form-picture' src={picture} alt='pizza'/>
        </div>
  
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

function mapStateToProps(state) {
  return{ order: state.orderDetails }
}

OrderForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default 
  connect(mapStateToProps, { createOrder })(OrderForm);