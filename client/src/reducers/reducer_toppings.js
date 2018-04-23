import { FETCH_TOPPINGS } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_TOPPINGS:
     return _.mapKeys(action.payload, 'toppingName')
    default:
      return state;
  }
}