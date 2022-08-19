import './index.scss'

type handleClickType = () => void

interface PropsType {
  readonly iconName: string,
  readonly iconClass?: string,
  readonly iconColor?: string,
  readonly handleClick?: handleClickType
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
  const {
    iconName,
    iconClass = '',
    iconColor = 'currentColor',
    handleClick = () => ({})
  } = props

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

export default SvgIcon
