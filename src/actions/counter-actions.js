import { ACTION_TYPES } from '../constants'

export default {
  add: () => ({
    type: ACTION_TYPES.COUNTER_ADD,
    amount: 1
  })
}
