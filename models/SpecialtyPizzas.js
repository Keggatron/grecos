const mongoose = require('mongoose');

const { Schema } = mongoose;

const specialtySchema = new Schema ({
  pizzaTitle: String,
  ingredients: [ String ],
  priceSm: Number,
  priceMed: Number,
  priceLg: Number
});

module.exports = mongoose.model('specialtyPizzas', specialtySchema);