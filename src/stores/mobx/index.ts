import { makeAutoObservable } from 'mobx'

class Timer {
  secondsPassed = 0

  constructor () {
    makeAutoObservable(this)
  }

  increase () {
    this.secondsPassed += 1
  }

  reset () {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer()

export { myTimer }
