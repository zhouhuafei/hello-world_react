import { makeAutoObservable } from 'mobx'

class Timer {
  secondsPassed = 0

  constructor () {
    makeAutoObservable(this)
  }

  increase (num: any) {
    this.secondsPassed += num
  }

  reset () {
    this.secondsPassed = 0
  }
}

const myTimer = new Timer()

export { myTimer }
