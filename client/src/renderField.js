import React from 'react'

const renderField = ({ input, label, type, className, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <input className={className} {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
)

export default renderField