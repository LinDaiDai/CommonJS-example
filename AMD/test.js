var requirejs = require("requirejs"); //引入requirejs模块

requirejs(['math'],function(math) {
  console.log('我是test, 我被加载了...')
  console.log(math.add(1, 2));
  math.print();
})
function other () {
  console.log('我是test模块内的, 但是我不依赖math')
};
other();