// 1. 正确
// console.log('我是m1模块')
// module.exports = {
// 	name: 'lindaidai',
//   sex: 'boy'
// }
// // 2. 正确
// exports.name = 'lindaidai';
// exports.sex = 'boy'

// // 3. 正确
// module.exports.name = 'lindaidai';
// module.exports.sex = 'boy'

// // 4. 无效
// exports = {
// 	name: 'lindaidai',
//   sex: 'boy'
// }

// 模块首次执行后会缓存案例
// var name = 'lindaidai';
// var sex = 'boy';

// exports.name = name;
// exports.sex = sex;

// CommonJS输出是值的拷贝案例
var name = 'lindaidai';
var sex = 'boy';
var advantage = ['handsome']

setTimeout(function () {
  sex = 'girl';
  // advantage.push('cute');
  advantage = ['cute'];
}, 500)

exports.name = name;
exports.sex = sex;
exports.advantage = advantage;