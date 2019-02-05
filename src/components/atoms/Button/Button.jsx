import './Button.scss'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' //connect every component to the store and its dispatch property which is a func
import React from 'react'
import counterActions from '../../../actions/counter-actions'

const Button = props => {
  console.log(props)
  const onClick = () => {
    //dispatch an action
    props.dispatch({
      type: 'COUNTER_ADD',
      amount: 1
    })
  }

  return (
    <div className="basic-button" onClick={onClick}>
      {props.counter}
    </div>
  )
}

export default connect(
  state => ({ counter: state.counter }),
  // dispatch => bindActionCreators(counterActions, dispatch)
  dispatch => ({
    dispatch
  })
)(Button)

// export default Button
