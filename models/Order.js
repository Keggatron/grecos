const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema ({
  nameOnOrder: String,
  addressOnOrder: String,
  orderType: String,
  orderPhoneNumber: String,
  orderPrice: Number,
  orderDetails: String
});

module.exports = mongoose.model('orders', orderSchema);