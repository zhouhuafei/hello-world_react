import { useBearStore } from 'src/stores/zustand'

function Zustand2 () {

  function onClick () {
    state.increasePopulation()
  }

  function onClickReset () {
    state.removeAllBears()
  }

  const state = useBearStore((state: any) => state)
  return (
    <div>
      <span>zustand：{state.bears}</span>
      <button onClick={onClick}>状态+1</button>
      <button onClick={onClickReset}>状态reset</button>
    </div>
  )
}

export default Zustand2
