import scss from './index.module.scss'
import { px2vw } from '@/utils'

const vw = px2vw(375)
console.log('%c%s等于%s', 'color: green;', '在本项目中375px', vw)

export default function HelloWorld () {

  console.log('HelloWorld')

  return (
    <div className={scss.brandColorText}>hello world</div>
  )
}
