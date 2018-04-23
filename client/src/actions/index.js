import axios from 'axios';
import { FETCH_SPECIALTY, FETCH_TOPPINGS, CREATE_ORDER } from "./types";


export const fetchSpecialty = () => async dispatch => {
  const res = await axios.get('/api/fetchspecialty');
  
  dispatch({ type: FETCH_SPECIALTY, payload: res.data })
};

export const fetchToppings = () => async dispatch => {
  const res = await axios.get('/api/fetchtoppings');
  
  dispatch({ type: FETCH_TOPPINGS, payload: res.data })
}

export const createOrder = (values) => async dispatch => {
  // const request = await axios.get('/api/createorder');
  
  console.log(values)
  
  // dispatch({ type: CREATE_ORDER, payload: request.data})
}