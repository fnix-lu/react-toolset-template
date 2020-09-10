import React, { Component } from 'react'
import css from './index.scss'

class Button extends Component {
  componentDidMount () {
    console.log(process.env.REACT_APP_BASE_API)
  }
  render () {
    return <div className={css['button']}>Button</div>
  }
}

export default Button
