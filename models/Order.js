const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema ({
  nameOnOrder: String,
  addressOnOrder: String,
  orderType: String,
  paymentOption: String,
  orderPhoneNumber: String,
  orderPrice: Number,
  orderDetails: Array,
  orderTime: Number,
  orderDate: String,
  completed: Boolean
});

module.exports = mongoose.model('orders', orderSchema);