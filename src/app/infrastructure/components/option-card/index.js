import React from 'react'

/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="option-card" onClick={() => props.handleClick(props.id)}>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </div>
  )
}

export default Card
