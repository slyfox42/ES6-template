import { ACTION_TYPES } from '../constants'

const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.COUNTER_ADD:
      return (state += action.amount)
    default:
      return state
  }
}
