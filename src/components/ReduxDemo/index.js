import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import { removeTodo } from '@/store/actions'

class ReduxDemo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  /* add (step, e) {
    console.log(e.nativeEvent)
    this.setState(state => ({
      number: state.number + step
    }))
  } */

  render () {
    const { todos, name, onRemoveTodo } = this.props
    const { number } = this.state

    console.log(onRemoveTodo)

    return (
      <div>
        {/* 组件与 redux 无关的 prop */}
        <div>{name}</div>

        {/* 组件内部与 redux 无关的 state */}
        {/* <div>{number}</div>
        <button onClick={this.add.bind(this, 1)}>Add 1</button>
        <button onClick={this.add.bind(this, 3)}>Add 3</button>
        <button onClick={this.add.bind(this, 5)}>Add 5</button> */}

        <ul>
          {todos.map(todo => 
            <li key={todo.id} onClick={onRemoveTodo(todo)}>{todo.title}</li>
          )}
        </ul>
      </div>
    )
  }
}

/* const mapStateToProps = (state, ownProps) => {
  console.log('ownProps', ownProps)
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (todo) => {
    // dispatch(removeTodo(todo))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxDemo) */

export default ReduxDemo
