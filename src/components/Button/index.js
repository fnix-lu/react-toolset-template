import React, { Component } from 'react'
import styles from './index.module.scss'

class Button extends Component {
  componentDidMount () {
    console.log(process.env.REACT_APP_BASE_API)
  }
  render () {
    return <div className={styles.button}>Button</div>
  }
}

export default Button
