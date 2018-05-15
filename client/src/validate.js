const validate = values => {
  const errors = {}
  if(!values.order) {
    errors.order = 'Please select an order type'
  }
  
  if(values.pizzas !== ''){
    values.pizzas.map((pizza, i) => {
      if(!pizza.details) {
        errors.details = 'Select a size'
      }
    })
  }
  
  if(!values.addressOnOrder){
    errors.addressOnOrder = 'Please enter a valid address.'
  }
  
  if(!values.nameOnOrder){
    errors.nameOnOrder = 'Please enter your name.'
  }
  
  if(!values.phoneNumber){
    errors.phoneNumber = 'Please enter your phone number.'
  }
  
  if(!values.paymentOption){
    errors.paymentOption = 'Please select a payment option.'
  }
  
  return errors
}
export default validate