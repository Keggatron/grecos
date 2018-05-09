import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SpecialtyReducer from './reducer_specialty';
import ToppingsReducer from './reducer_toppings';
import OrderReducer from './reducer_createOrder';
import FetchOrderReducer from './reducer_fetchOrders';

const rootReducer = combineReducers({
  specialtyPizza: SpecialtyReducer,
  toppings: ToppingsReducer,
  form: formReducer,
  orderDetails: OrderReducer,
  allOrders: FetchOrderReducer
});

export default rootReducer;