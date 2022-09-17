import { observer } from 'mobx-react'
import { myTimer } from 'src/stores/mobx-react'

function MobxReact () {
  function onClick () {
    myTimer.increase()
  }

  function onClickReset () {
    myTimer.reset()
  }

  return (
    <div>
      <span>mobx-react：{myTimer.secondsPassed}</span>
      <button onClick={onClick}>状态+1</button>
      <button onClick={onClickReset}>状态reset</button>
    </div>
  )
}

export default observer(MobxReact)
