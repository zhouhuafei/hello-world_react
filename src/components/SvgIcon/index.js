import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function getClassName (iconClass) {
  let res = 'svg-icon'
  if (iconClass) res += ` ${iconClass}`
  return res
}

function getHandleClick (handleClick) {
  return function () {
    handleClick && handleClick()
  }
}

function SvgIcon (props) {
  const { iconName, iconClass, iconColor, handleClick } = props

  return (
    <svg
      aria-hidden="true"
      className={getClassName(iconClass)}
      onClick={getHandleClick(handleClick)}
    >
      <use
        xlinkHref={`#icon-${iconName}`}
        fill={iconColor}
      />
    </svg>
  )
}

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconClass: PropTypes.string,
  iconColor: PropTypes.string,
  handleClick: PropTypes.func
}

SvgIcon.defaultProps = {
  iconColor: 'currentColor'
}

export default SvgIcon
