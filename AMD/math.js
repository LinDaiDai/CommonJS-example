define(['m1'], function (m1) {
  console.log('我是math, 我被加载了...')
  var add = function (a, b) {
    return a + b;
  }
  var print = function () {
    console.log(m1.name)
  }
  return {
    add: add,
    print: print
  }
})