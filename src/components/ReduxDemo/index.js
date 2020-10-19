import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeTodo } from '@/store/actions'

class ReduxDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0,
      deletedTodos: []
    }
  }

  add (step, e) {
    console.log(e.nativeEvent)
    this.setState(state => ({
      number: state.number + step
    }))
  }

  removeTodo (todo) {
    this.setState(state => ({
      deletedTodos: state.deletedTodos.concat(todo)
    }))
  }

  render () {
    const { todos, name, onRemoveTodo } = this.props
    const { number, deletedTodos } = this.state

    return (
      <div>
        {/* 组件与 redux 无关的 prop */}
        <div>{name}</div>

        {/* 组件内部与 redux 无关的 state */}
        <div>{number}</div>
        <button onClick={this.add.bind(this, 1)}>Add 1</button>
        <button onClick={this.add.bind(this, 3)}>Add 3</button>
        <button onClick={this.add.bind(this, 5)}>Add 5</button>

        {/* 数据来自 redux 的 todo 列表 */}
        <div>删除：{deletedTodos.map(todo => todo.title).toString()}</div>
        <ul>
          {todos.map(todo =>
            <li
              key={todo.id}
              onClick={() => {
                this.removeTodo(todo)
                onRemoveTodo(todo)
              }}
            >{todo.title}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (todo) => {
    dispatch(removeTodo(todo))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo)
