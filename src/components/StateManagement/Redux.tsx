import { store, incremented, decremented } from 'src/stores/redux'
import { useEffect, useState } from 'react'

function Redux () {

  useEffect(() => {
    return () => {
      unsubscribe() // 别忘了取消监听 - <React.StrictMode>导致开发环境异常 - 所以把它注释掉了
    }
  })

  const [now, setNow] = useState(0)

  const unsubscribe = store.subscribe(() => {
    setNow(Date.now()) // 通过setState重新渲染组件 - 如果嫌弃不优化 - 可以使用react-redux
  })

  function onClickIncrement () {
    store.dispatch(incremented(1))
  }

  function onClickDecrement () {
    store.dispatch(decremented(1))
  }

  return (
    <div>
      <span>redux：{store.getState().value}</span>
      <button onClick={onClickIncrement}>状态+1</button>
      <button onClick={onClickDecrement}>状态-1</button>
    </div>
  )
}

export default Redux
