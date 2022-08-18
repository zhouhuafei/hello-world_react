import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const SvgIcon = props => {
  const fHandleClick = () => {
    props.handleClick && props.handleClick()
  }

  const { iconClass, iconName, fillColor, size } = props

  return (
    <svg
      className={iconClass ? `svg-icon ${iconClass}` : 'svg-icon'}
      width={size}
      height={size}
      aria-hidden="true"
      onClick={fHandleClick}>
      <use xlinkHref={`#icon-${iconName}`} fill={fillColor}></use>
    </svg>
  )
}

SvgIcon.propTypes = {
  iconClass: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  fillColor: PropTypes.string
}

SvgIcon.defaultProps = { fillColor: 'currentColor' }

export default SvgIcon
