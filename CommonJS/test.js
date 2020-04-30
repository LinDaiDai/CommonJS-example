// var m1 = require('./m1.js');
// console.log(m1);
// console.log(module.paths)

// require参数为表达式的案例
var m1Url = './m1.js';
// var m1 = require(m1Url);
var m1 = require('./m' + '1.js');
console.log(m1)

// 模块标识符案例
// var lindaidai = require('lindaidai');
// lindaidai.print();

// 同步加载案例
// var m1 = require('./m1');
// console.log('我是test模块');

// 模块首次执行后会缓存案例
// var m1 = require('./m1');
// m1.sex = 'girl';
// console.log(m1);

// var m2 = require('./m1');
// console.log(m2);

// CommonJS输出是值的拷贝案例
// var m1 = require('./m1');
// setTimeout(function () {
//   console.log('read count after 1000ms in commonjs is', m1.sex)
//   console.log('read count after 1000ms in commonjs is', m1.advantage)
// }, 1000)