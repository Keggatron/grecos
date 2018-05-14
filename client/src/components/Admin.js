import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders, completeOrder } from '../actions/index';
import _ from 'lodash';
import io from 'socket.io-client'
let socket

class Timer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      elapsed: this.fetchTime()
    }
  }
  
  fetchTime = () => {
    return Math.round((Date.now() - this.props.orderTime)/60000)
  }
  
  updateTime = () => {
    return this.setState({elapsed: this.fetchTime()});
  }
  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  render() {
    const elapsedTime = this.state.elapsed
    return (
      <td
        style= { elapsedTime > 30 ? { backgroundColor: 'red'} : {backgroundColor: 'green'}}
      >
        {elapsedTime}
      </td>
    )
  }
  
}

const RenderOrders = (props) => {
  const orders = props.orders
  
  return _.map(orders, (order, key) => {
    const renderDetails = order.orderDetails.map((order, i) => {
      return (
        <span key={order[i]}>
          {order.details.category}: {order.toppings.join(", ")}
          <br />
        </span>
      );
    });
    return(
      <tr>
        <td>{order.nameOnOrder}</td>
        <td>{order.addressOnOrder}</td>
        <td>{order.orderPhoneNumber}</td>
        <td>{order.orderPrice}</td>
        <td>{order.orderType}</td>
        <td>{order.paymentOption}</td>
        <td>{renderDetails}</td>
        <Timer orderTime={order.orderTime} />
        <td><button className='button' onClick={props.completeOrder} id={order._id}>Completed</button></td>
      </tr>  
    )
  })  
    
}

class Admin extends Component {
  constructor(props){
    super(props)
    
    socket = io.connect('https://projects-keggatron1.c9users.io:8081' || process.env.MONGO_URI)
  
    socket.on('newOrder', () => {
      this.props.fetchOrders();
    })
    
    // this.completeThisOrder = this.completeThisOrder.bind(this)
  } 
  
  
  
  completeThisOrder = (event) => {
    
    const id = event.target.id;
    this.props.completeOrder(id)
    .then(() => {
      this.props.fetchOrders()
    })
  }
  
  componentDidMount() {
    this.props.fetchOrders()
  }
  

  render() {
    return (
      <div className="container">
        <h1> Open Orders </h1>
        <table className='admin-table'>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Price</th>
            <th>Type of Order</th>
            <th>Payment Method</th>
            <th>Details</th>
          </tr>
          <RenderOrders 
            orders={ this.props.allOrders } 
            completeOrder={this.completeThisOrder} 
          />
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { allOrders: state.allOrders }
};

const mapDispatchToProps = {
  fetchOrders,
  completeOrder
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Admin);