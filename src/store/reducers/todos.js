// use the field name in the state as the file name

import types from '../action-types'

export default function (state = [], action) {
  switch (action.type) {
    case types.SET_TODOS:
      return action.todos
    default:
      return state
  }
}
