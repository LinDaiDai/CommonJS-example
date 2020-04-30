// 错误
// console.log('我是m1, 我被加载了...')
// module.exports = {
// 	name: 'lindaidai',
//   sex: 'boy'
// }

// 正确
define(function () {
  console.log('我是m1, 我被加载了...')
  return {
    name: 'lindaidai',
    sex: 'boy'
  }
})
