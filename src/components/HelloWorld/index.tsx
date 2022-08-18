import scss from './index.module.scss'
import { px2vw } from '@/utils'

export default function HelloWorld () {

  const vw = px2vw(375)
  console.log('%c%s', 'color: green;', vw)

  return (
    <div className={scss.brandColorText}>hello world</div>
  )
}
