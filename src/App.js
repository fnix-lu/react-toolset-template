import React, { Component } from 'react'
// import logo from './logo.svg'
import css from './App.scss'

import store from './store'
import { setTodos } from './store/actions'

import { getTodoList } from '@/api/todo'

import Button from '@/components/Button'
import SvgIcon from '@/components/SvgIcon'

import ReduxDemo from '@/components/ReduxDemo'
import { connect } from 'react-redux'
import { removeTodo } from '@/store/actions'

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps)
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (todo) => {
    dispatch(removeTodo(todo))
  }
})

const ReduxDemoConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: []
    }
  }
  componentDidMount () {
    /* store.subscribe(() => {
      this.setState({
        todoList: store.getState().todos
      })
    }) */

    getTodoList().then(res => {
      store.dispatch(setTodos(res.data))
    })
  }
  render () {
    const { todoList } = this.state

    return (
      <div className={css['App']}>
        <header className={css['App-header']}>
          <img src={require('./logo.svg')} className={css['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={css['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button />
          <SvgIcon iconClass="404" />
          <ul>
            {todoList.map(todo =>
              <li key={todo.id}>{todo.title}</li>
            )}
          </ul>
          <ReduxDemoConnected name="Redux Demo" />
        </header>
      </div>
    )
  }
}

export default App
