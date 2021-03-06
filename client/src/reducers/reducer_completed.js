import { COMPLETE_ORDER } from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case COMPLETE_ORDER:
      return action.payload
    default:
      return state;
  }
}