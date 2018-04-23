const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderDetailsSchema = new Schema ({
  orderDate: {type: Date, default: Date.now},
  orderDetails: [ String ],
  price: String
});

module.exports = mongoose.model('orderDetails', orderDetailsSchema);