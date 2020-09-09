import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import { getTodoList } from '@/api/todo'

import Button from '@/components/Button'

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button />
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
