const keys = require('../config/keys');
const path = require('path');
const SpecialtyPizzas = require('../models/SpecialtyPizzas');
const Toppings = require('../models/Toppings');
const Order = require('../models/Order');

  Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this;
  }           
 
function getDate() {  
  var d = new Date,
  dformat = [(d.getMonth()+1).padLeft(),
             d.getDate().padLeft(),
             d.getFullYear()].join('/') +' ' +
            [d.getHours().padLeft(),
             d.getMinutes().padLeft(),
             d.getSeconds().padLeft()].join(':');
  return dformat
}
module.exports = app => {
  // production requests are sent to HTML rather than server
  app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'), (err) => {
      if(err) {
        res.status(500).send(err)
      }
    })
  })
  // grab all specialty pizzas for menu
  app.get('/api/fetchspecialty', async (req,res) => {
    const pizzas = await SpecialtyPizzas.find({});
    res.send(pizzas);
  });
  
  // Get toppings route
  app.get('/api/fetchtoppings', async (req,res) => {
    const pizzas = await Toppings.find({});
    res.send(pizzas);
  });
  
  // Create order route
  app.post('/api/createorder', async (req, res) => {
    const newOrder = await Order.create({
      addressOnOrder: req.body.addressOnOrder,
      nameOnOrder: req.body.nameOnOrder,
      orderType: req.body.order,
      orderPrice: req.body.orderPrice,
      paymentOption: req.body.paymentOption,
      orderPhoneNumber: req.body.phoneNumber,
      orderDetails: req.body.pizzas,
      orderTime: Date.now(),
      orderDate: getDate(),
      completed: false
    });
    const ordered = await newOrder.save()
    res.send(newOrder)
  });
  
  // fetch all orders to display on admin page
  app.get('/api/fetchorders', async (req,res) => {
    const orders = await Order.find({"completed":false})
    console.log(orders)
    res.send(orders)
  })
  
  app.put('/api/completeorder', async (req,res) => {
     var id = Object.keys(req.body)[0]
    const completed = await Order.findByIdAndUpdate(id, {
      completed: true
    })
    res.send(completed)
  })
};

