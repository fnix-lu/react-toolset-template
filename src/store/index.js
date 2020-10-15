import { combineReducers, createStore } from 'redux'

// require all reducer modules
const reducerFiles = require.context('./reducers', true, /\.js$/)

const reducers = reducerFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = reducerFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

// create store
const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default store
