import scss from './index.module.scss'
import { px2vw } from '@/utils'

const vw = px2vw(375)
console.log('%c%s', 'color: green;', '在react中没有全局组件的概念')
console.log('%c%s等于%s', 'color: green;', '在本项目中375px', vw)

export default function HelloWorld () {

  console.log('HelloWorld')

  return (
    <div className={scss.hello}>
      <div className={scss.text}>hello world</div>
    </div>
  )
}
