import React, { Component } from 'react'
// import logo from './logo.svg'
import css from './App.scss'

import { getTodoList } from '@/api/todo'

import Button from '@/components/Button'
import SvgIcon from '@/components/SvgIcon'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: []
    }
  }
  componentDidMount () {
    getTodoList().then(res => {
      console.log(res)
      this.setState({
        todoList: res.data
      })
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
        </header>
      </div>
    )
  }
}

export default App
