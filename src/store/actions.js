import types from './action-types'

export function setTodos (todos) {
  return {
    type: types.SET_TODOS,
    payload: todos
  }
}

export function removeTodo (todo) {
  return {
    type: types.REMOVE_TODO,
    payload: todo
  }
}
