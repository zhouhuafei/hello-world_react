import './index.scss'

type handleClickType = () => void

interface PropsType {
  iconName: string,
  iconClass?: string,
  iconColor?: string,
  handleClick?: handleClickType
}

function getClassName (iconClass: string) {
  let res = 'svg-icon'
  if (iconClass) res += ` ${iconClass}`
  return res
}

function getHandleClick (handleClick: handleClickType) {
  return function () {
    handleClick()
  }
}

function SvgIcon (props: PropsType) {
  props.iconClass = props.iconClass || ''
  props.iconColor = props.iconColor || ''
  props.handleClick = props.handleClick || (() => ({}))

  return (
    <svg
      aria-hidden="true"
      className={getClassName(props.iconClass)}
      onClick={getHandleClick(props.handleClick)}
    >
      <use
        xlinkHref={`#icon-${props.iconName}`}
        fill={props.iconColor}
      />
    </svg>
  )
}

export default SvgIcon
