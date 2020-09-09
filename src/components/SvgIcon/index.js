import React, { Component } from 'react'
import './index.scss'

import { isExternal } from '@/utils/validate'

class SvgIcon extends Component {
  render () {
    const { iconClass, className } = this.props

    const external = isExternal(iconClass)
    const iconName = `#icon-${iconClass}`
    const svgClass = className ? `svg-icon ${className}` : 'svg-icon'
    const styleExternalIcon = {
      mask: `url(${iconClass}) no-repeat 50% 50%`,
      '-webkit-mask': `url(${iconClass}) no-repeat 50% 50%`
    }

    return external
     ? (
      <div
        style={styleExternalIcon}
        className="svg-external-icon svg-icon"
      />
     )
     : (
      <svg className={svgClass} aria-hidden="true">
        <use xlinkHref={iconName} />
      </svg>
     )
  }
}

export default SvgIcon
