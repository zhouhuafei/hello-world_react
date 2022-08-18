export function px2vw (px = 0, psd = 375, unit = true) {
  let computedResult: number | string = 100 * px / psd
  if (unit) {
    computedResult = computedResult + 'vw'
  }
  return computedResult
}

px2vw(375)
