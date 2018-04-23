import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <input {...input} placeholder={label} type={type} />
      <label>{label}</label>
      {touched && error && <span>{error}</span>}
    </div>
)

export default renderField