import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SpecialtyReducer from './reducer_specialty';
import ToppingsReducer from './reducer_toppings';

const rootReducer = combineReducers({
  specialtyPizza: SpecialtyReducer,
  toppings: ToppingsReducer,
  form: formReducer
});

export default rootReducer;