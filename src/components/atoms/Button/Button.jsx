import './Button.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' //connect every component to the store and its dispatch property which is a func
import React from 'react'
import counterActions from '../../../actions/counter-actions'

const Button = props => {
  console.log(props)
  return (
    <div className="basic-button" onClick={onClick}>
      Click me!
    </div>
  )
}

const onClick = () => {
  console.log('I have been clicked!')
  //dispatch an action
}

export default connect(
  state => ({ counter: state.counter }),
  dispatch => dispatch
)(Button)
