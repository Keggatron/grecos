const mongoose = require('mongoose');

const { Schema } = mongoose;

const toppingSchema = new Schema ({
  toppingName: String,
  toppingCategory: String
});

module.exports = mongoose.model('toppings', toppingSchema);