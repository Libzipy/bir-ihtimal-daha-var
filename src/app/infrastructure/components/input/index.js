import React from 'react'

/* eslint-disable react/prop-types */
const Input = (props) => {
  return (
    <input
      className={props.class}
      type={props.type || 'text'}
      placeholder={props.placeholder || 'doldurunuz'}
      required={props.required || 'false'}
    />
  )
}

export default Input
