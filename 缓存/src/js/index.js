import '../css/index.css'

import print from './print'

console.log('index执行222')
print()

// 通过module.hot判断是否开启了HMR
if (module.hot) {
  // 如果开启了就去检测某个引入的文件是否变化, 如果变化了就单独重新执行该模块里引入的方法或对象
  module.hot.accept('./print', () => {
    print()
  })
}