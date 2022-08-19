import { useState, useEffect, MouseEvent } from 'react'
import scss from './index.module.scss'
import { px2vw } from '@/utils'
import SvgIcon from '@/components/SvgIcon'

const vw = px2vw(375)
console.log('%c%s', 'color: green;', '在react中没有全局组件的概念')
console.log('%c%s等于%s', 'color: green;', '在本项目中375px', vw)

export default function HelloWorld () {
  console.log('HelloWorld')

  let [count, setCount] = useState(11)
  let [calculatorFields, setCalculatorFields] = useState({ calculator: { count: 21, name: '计算器' } })

  useEffect(() => {
    console.log('useEffect')
    console.log('count', count)
    console.log('calculatorFields.calculator.count', count)
  }, [
    count,
    calculatorFields
  ])

  function handleCounter (e: MouseEvent) {
    console.log('MouseEvent', e)
    count++
    setCount(count)

    calculatorFields.calculator.count++
    setCalculatorFields(calculatorFields)
  }

  return (
    <div className={scss.hello} onClick={handleCounter}>
      <SvgIcon iconName="home" iconClass={scss.icon} />
      <div className={scss.text}>
        <span className={scss.textItem}>{count}</span>
        <span className={scss.textItem}>hello</span>
        <span className={scss.textItem}>world</span>
        <span className={scss.textItem}>{calculatorFields.calculator.count}</span>
      </div>
      <SvgIcon iconName="mine" iconClass={scss.icon} />
    </div>
  )
}
