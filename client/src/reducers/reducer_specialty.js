import { FETCH_SPECIALTY } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SPECIALTY:
      return _.mapKeys(action.payload, 'pizzaTitle');
    default:
      return state;
  }
}