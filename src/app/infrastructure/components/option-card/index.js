import React from 'react'

/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="option-card" onClick={() => props.handleClick(props.id)}>
      <div className="click-icon" onClick={() => props.handleClick(props.id)}>
        <i className="fas fa-fingerprint"></i>
      </div>
      <div className="option-card-wrapper">
        <h2 className="option-card-title">{props.title}</h2>
        <p className="option-card-description">{props.description}</p>
      </div>
    </div>
  )
}

export default Card
