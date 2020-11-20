import React, { Component } from 'react'
// import logo from './logo.svg'
import css from './App.scss'

import store from './store'
import { setTodos } from './store/actions'

import { getTodoList } from '@/api/todo'

import Button from '@/components/Button'
import SvgIcon from '@/components/SvgIcon'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: [],
      n: 0
    }
  }
  componentDidMount () {
    store.subscribe(() => {
      this.setState({
        todoList: store.getState().todos
      })
    })

    getTodoList().then(res => {
      store.dispatch(setTodos(res.data))
    })

    // setState demo
    setTimeout(() => {
      this.setState(
        { n: this.state.n + 1 },
        () => console.log('回调b1', this.state.n) // 4th: 2
      )
      console.log('b', this.state.n) // 5th: 2
    }, 0)

    this.setState(
      { n: this.state.n + 1 },
      () => console.log('回调a1', this.state.n) // 2nd: 1
    )
    this.setState(
      { n: this.state.n + 1 },
      () => console.log('回调a2', this.state.n) // 3rd: 1
    )
    console.log('a', this.state.n) // 1st: 0
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
        </header>
      </div>
    )
  }
}

export default App
