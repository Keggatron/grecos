import axios from 'axios';
import { FETCH_SPECIALTY, FETCH_TOPPINGS, CREATE_ORDER, FETCH_ORDERS, COMPLETE_ORDER } from "./types";


export const fetchSpecialty = () => async dispatch => {
  const res = await axios.get('/api/fetchspecialty');
  
  dispatch({ type: FETCH_SPECIALTY, payload: res.data })
};

export const fetchToppings = () => async dispatch => {
  const res = await axios.get('/api/fetchtoppings');
  
  dispatch({ type: FETCH_TOPPINGS, payload: res.data })
}

export const createOrder = (values) => async dispatch => {
  const request = await axios.post('/api/createorder', values)
  
  dispatch({ type: CREATE_ORDER, payload: request.data})
}

export const fetchOrders = () => async dispatch => {
  const res = await axios.get('/api/fetchorders')
  
  dispatch({ type: FETCH_ORDERS, payload: res.data })
}

export const completeOrder = (id) => async dispatch => {
  const res = await axios.put('/api/completeorder', id)
  
  dispatch({ type: COMPLETE_ORDER, payload: res.data})
}