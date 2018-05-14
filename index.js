const express = require('express');
const app = express();
const socket = require('socket.io');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const SpecialtyPizza = require('./models/SpecialtyPizzas');
const Topping = require('./models/Toppings');


mongoose.connect(keys.mongoURI, {UseMongoClient: true});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

require('./routes/pizzaRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


const server = app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The Greco's app server has started");
});

const io = socket(server)

io.on('connection', (socket) => {
  console.log('made socket connection', socket.id);
  
  socket.on('newOrder', (data) => {
    io.sockets.emit('newOrder', data);
  });
});

// SpecialtyPizza.create(
//   {
//     pizzaTitle: "Margherita",
//     ingredients: [	"Basil", "Tomato", "Mozzarella"],
//     priceSm: 14.50,
//     priceMed: 16.50,
//     priceLg: 18.50
//   },  

//   {
//     pizzaTitle: "Meat Lover's", 
//     ingredients : [ "Pepperoni", "Crumbled Meatballs", "Red Onion", "Mozzarella", "Red Sauce" ], 
//     priceSm : 14.5, 
//     priceMed : 16.5, 
//     priceLg: 18.5
//   },
//   {
//     pizzaTitle : "White Heaven", 
//     ingredients : [ "White Cream Sauce", "Bacon", "Chopped Garlic", "Mozzarella", "Oregano", "Arugula" ], 
//     priceSm : 14.5, 
//     priceMed : 16.5, 
//     priceLg : 18.5
//   },
//   {
//     pizzaTitle : "Barbeque Chicken", 
//     ingredients : [ "Grilled Chicken", "Red Onion", "Banana Peppers", "Mozzarella", "Gorgonzola", "BBQ Sauce" ], 
//     priceSm : 14.5, 
//     priceMed : 16.5, 
//     priceLg : 18.5
//   },
//   {
//     pizzaTitle : "Saucisse",
//     ingredients : [ "Italian Sausage", "Sauteed Onions", "Roasted Red Peppers", "Mozzarella", "Red Sauce" ],
//     priceSm : 14.5, 
//     priceMed : 16.5, 
//     priceLg : 18.5
//   },
//   {
//     pizzaTitle : "Margherita", 
//     ingredients : [ "Basil", "Tomato", "Mozzarella" ], 
//     priceSm : 14.5, 
//     priceMed : 16.5, 
//     priceLg : 18.5
//   }
// )
// Topping.create(
//   [
//     { toppingName: "pepperoni" , toppingCategory: "meat" },
//     { toppingName: "crumbled meatball" , toppingCategory: "meat" },
//     { toppingName: "italian sausage", toppingCategory: "meat" },
//     { toppingName:  "smoked ham", toppingCategory: "meat" },
//     { toppingName:  "smoked bacon", toppingCategory: "meat" },
//     { toppingName:  "salami", toppingCategory: "meat" },
//     { toppingName:  "grilled chicken", toppingCategory: "meat" },
//     { toppingName:  "beef", toppingCategory: "meat" },
    
//     { toppingName: "red onion", toppingCategory: "vegetables"},
//     { toppingName: "tomatoes", toppingCategory: "vegetables"},
//     { toppingName: "olives", toppingCategory: "vegetables"},
//     { toppingName: "arugula", toppingCategory: "vegetables"},
//     { toppingName: "basil", toppingCategory: "vegetables"},
//     { toppingName: "green peppers", toppingCategory: "vegetables"},
//     { toppingName: "banana peppers", toppingCategory: "vegetables"},
//     { toppingName: "spinach", toppingCategory: "vegetables"},
//     { toppingName: "pineapple", toppingCategory: "vegetables"},
//     { toppingName: "roasted red pepper", toppingCategory: "vegetables"},
//     { toppingName: "mushroom", toppingCategory: "vegetables"},
//     { toppingName: "chopped garlic", toppingCategory: "vegetables"},
    
//     { toppingName: "fresh mozzarella", toppingCategory: "cheeses"},
//     { toppingName: "gorgonzola", toppingCategory: "cheeses"},
//     { toppingName: "parmesan", toppingCategory: "cheeses"},
//     { toppingName: "feta", toppingCategory: "cheeses"}
    
//   ]
//   )