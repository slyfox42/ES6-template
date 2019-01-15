import './Button.scss'
import React from 'react'

const Button = () => {
  return (
    <div className="basic-button" onClick={onClick}>
      Click me!
    </div>
  )
}

const onClick = () => {
  console.log('I have been clicked!')
}

export default Button
