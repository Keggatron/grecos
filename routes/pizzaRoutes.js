const keys = require('../config/keys');
const bodyParser = require('body-parser');
const SpecialtyPizzas = require('../models/SpecialtyPizzas');
const Toppings = require('../models/Toppings');
const Order = require('../models/Order');


module.exports = app => {
  // grab all specialty pizzas for menu
  app.get('/api/fetchspecialty', async (req,res) => {
    const pizzas = await SpecialtyPizzas.find({});
    res.send(pizzas);
  });
  
  app.get('/api/fetchtoppings', async (req,res) => {
    const pizzas = await Toppings.find({});
    res.send(pizzas);
  });
  
  app.post('/api/createorder', async (req, res) => {
    const newOrder = await Order.create({
      nameOnOrder: req.body.nameOnOrder,
      addressOnOrder: req.body.addressOnOrder,
      orderType: req.body.order,
      orderPaymentType: req.body.paymentOption,
      orderPhoneNumber: req.body.phoneNumber,
      orderDetails: req.body.pizzas,
      orderPrice: req.body.orderPrice
    });
  });
};