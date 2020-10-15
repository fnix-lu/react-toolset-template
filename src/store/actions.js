import types from './action-types'

export function setTodos (todos) {
  return {
    type: types.SET_TODOS,
    todos
  }
}
