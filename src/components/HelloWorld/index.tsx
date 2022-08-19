import { useState, useEffect, MouseEvent } from 'react'
import scss from './index.module.scss'
import { px2vw } from '@/utils'
import SvgIcon from '@/components/SvgIcon'

const vw = px2vw(375)
console.log('%c%s', 'color: green;', '在react中没有全局组件的概念')
console.log('%c%s等于%s', 'color: green;', '在本项目中375px', vw)

export default function HelloWorld () {
  console.log('HelloWorld')

  let [countFields, setCountFields] = useState({ fields: { count: 0 } })

  useEffect(() => {
    console.log('useEffect')
  }, [countFields])

  function handleCounter (e: MouseEvent) {
    console.log('MouseEvent', e)
    countFields.fields.count++
    setCountFields({ ...countFields })
  }

  return (
    <div className={scss.hello} onClick={handleCounter}>
      <SvgIcon iconName="home" iconClass={scss.icon} />
      <div className={scss.text}>
        <span className={scss.textItem}>hello</span>
        <span className={scss.textItem}>world</span>
        <span className={scss.textItem}>{countFields.fields.count}</span>
      </div>
      <SvgIcon iconName="mine" iconClass={scss.icon} />
    </div>
  )
}
