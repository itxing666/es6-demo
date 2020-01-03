'use strict';

// 第一节 环境搭建
// let a = 12;
// console.log(a);

// 第二节 变量的声明方式
// var variable的简写，可以理解成变量的意思
// let 英文中是“让”的意思，也可以理解为一种声明的意思
// const 英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量
// 变量提升查看ts-demo06

// var a = 'itxing';
// console.log('================', a);

// var a = 'itxing'
// window.onload = function() {
//   console.log('================', a)
// }


// // 用区块的方式证明var为全局的
// var a = 2
// {
//   var a = 3
// }
// console.log('=============', a)

// {
//   let a = 3
// }
// console.log('==========', a) // a is not defined


// for(var i = 0; i < 10; i++) {
//   console.log('var循环体中：'+ i)
// }
// console.log('var循环体外：' + i)

// for(let i = 0; i < 10; i++) {
//   console.log('let循环体中：'+ i)
// }
// console.log('let循环体外：' + i)


// const a = 'itxing'
// var a = 'hello'
// console.log('==========', a) //'a' has already been declared


// 第三节 变量的解构赋值
// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

// // 以前
// let a = 0
// let b = 1
// let c = 2
// console.log('=============', a, b, c)

// // 现在 等号左边和等号右边的形式要统一，如果不统一解构将失败
// let [a, [b, c], d] = [1, [2, 3], 4]
// console.log('=============', a, b, c)

// // 解构的默认值
// let [foo = true] = []
// console.log(foo) // true

// // 注意undefined null的区别
// let [a, b=' hello'] = ['itxing', undefined]
// console.log(a + b) // itxing hello

// let [a, b='hello'] = ['itxing', null]
// console.log(a + b)

// // 对象的解构赋值 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
// let {foo, bar} = {foo: 'itxing', bar: 'hello'}
// console.log(foo + bar)

// // 圆括号的使用 解构之前就定义了变量，这时候你再解构会出现问题,编译会报错
// let foo;
// {foo} = {foo: 'itxing'}
// console.log('=================', foo)

// // 要解决报错，在解构的语句外加一个圆括号
// let foo
// ({foo} = {foo: 'itxing'})
// console.log('=============', foo)


// // 字符串解构
// const [a, b, c, d, e, f] = 'itxing'
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// // 第四节 扩展运算符和rest运算符...
// function fun(...arg) {
//   console.log(arg)
// }
// fun(1, 2, 3)

// // 解决浅拷贝问题
// // arr2变化了 arr1也变化了
// let arr1 = ['www', 'itxing', 'com']
// let arr2 = arr1
// console.log(arr2)
// arr2.push('hello')
// console.log(arr1)

// let arr1 = ['www', 'itxing', 'com']
// let [...arr2] = arr1
// // let arr2 = [...arr1]
// console.log(arr2)
// arr1.push('hello')
// console.log(arr2)
// console.log(arr1)

// // rest运算符
// function fun(first, ...arg) {
//   console.log(arg)
// }
// fun(0, 1, 2, 3, 4, 5)

// function fun(first, ...arg) {
//   for (const val of arg) {
//     console.log(val)
//   }
// }

// fun(0, 1, 2, 3, 4, 5)

// // 第五节 字符串模版 `` includes startsWith endsWith repeat
// // es5 的字符串拼接方案
// let itxing = 'itxing'
// let blog = '我是你的老朋友' + itxing + '字符串模版'
// console.log(blog)

// // es6 字符串模版
// let itxing = 'itxing'
// let blog = `我是你的老朋友 ${itxing}字符串模版`
// console.log(blog)

// // 对运算的支持
// let a = 1
// let b = 2
// let result = `${a+b}`
// console.log(result)

// // 查找是否存在
// let itxing = 'itxing'
// let blog = '我是你的老朋友itxing'
// console.log(blog.indexOf(itxing))
// console.log(blog.includes(itxing))

// // 判断开头是否存在
// let itxing = 'itxing'
// let blog = '我是你的老朋友itxing'
// console.log(blog.startsWith(itxing))
// console.log(blog.endsWith(itxing))

// // // 复制字符串
// console.log('test'.repeat(3))

// //第六节 数字的操作
// // 二进制 0b 八进制0o 十六进制0x
// let binary = 0b010101
// console.log('===================', binary)
// let octal = 0o666
// console.log('===================', octal)

// // Number.isFinite() 数字验证
// let a = 11/4
// console.log(Number.isFinite(a))
// console.log(Number.isFinite('jspang'))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(undefined))

// // NaN是特殊的非数字，Number.isNaN()来进行验证
// console.log(Number.isNaN(NaN))

// // 判断是否为整数Number.isInteger()
// console.log(Number.isInteger(1))

// // 整数转换 Number.parseInt()  Number.parseFloat()
// let a = '9.18'
// console.log(Number.parseInt(a))
// console.log(Number.parseFloat(a))

// // 整数的取值范围
// let a = Math.pow(2,53)-1
// console.log('===========', a)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// // 安全整数判断 isSafeInteger
// console.log(Number.isSafeInteger(a))


// // 第七节 新增数组知识1
// let json = {
//   0: 'hello',
//   1: 'itxing',
//   2: '.com',
//   length: 3
// }
// let arr = Array.from(json)
// console.log('================', arr)

// // Array.from  Array.of find fill
// let arr = Array.of(3, 4, 5, 6)
// console.log('='.repeat(30), arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let target = arr.find(val => {
//   return val > 5
// })
// console.log('='.repeat(30), target)

// // fill 填充
// let arr = [0, 1, 2, 3, 4, 5, 6]
// arr.fill('itxing', 2, 5)
// console.log(arr)

// let arr = ['a', 'b']
// for (const val of arr.keys()) {
//   console.log('==============', val)
// }
// console.log(Object.values(arr))


// let arr = ['itxing', '.com', 'hello']
// for (const item of arr) {
//   console.log('='.repeat(30), item)
// }

// for (const index of arr.keys()) {
//   console.log('='.repeat(30), index)
// }

// for (const [index, val] of arr.entries()) {
//   console.log(index+':'+val)
// }

// let list = arr.entries()
// console.log(list.next().value)
// console.log(list.next().value)
// console.log(list.next().value)

// // ES6 箭头函数和扩展
// function add(a, b) {
//   return a+b;
// }
// console.log(add(1,2))

// // ES6增加了默认值
// function add(a, b=1) {
//   return a+b;
// }
// console.log(add(1))


// function add(a, b=1) {
//   if (a === 0) {
//     throw new Error('This is error')
//   }
//   return a+b
// }
// console.log(add(0))

// // 会报错 使用了默认值又使用了严谨模式 产生冲突
// function add(a, b=1) {
//   'use strict'
//   if(a === 0) {
//     throw new Error('This is error')
//   }
//   return a+b
// }
// console.log(add(1))

// function add(a, b) {
//   'use strict'
//   if (a === 0) {
//     throw new Error('This is error')
//   }
//   return a+b
// }
// console.log(add(1,2))
// console.log(add.length) //不知道函数需要传递几个参数怎么办

// // 箭头函数 方法体内如果是两句话，那就需要在方法体外边加上{}括号
// const add = (a, b=1) => a+b
// console.log(add(1))


// const add = (a, b=1) => {
//   console.log('itxing')
//   return a+b
// }
// console.log(add(1))


// // 第十章 ES6的函数和数组补漏
// let json = {
//   a: 'itxing',
//   b: '.com'
// }
// const fun = ({a, b='itxing'}) => {
//   console.log(a, b)
// }
// fun(json)

// // 数组的解构
// let arr = ['itxing','.com','hello'];
// function fun([a, ...b]){
//     console.log(b);
// }

// fun(arr);


// let arr = ['itxing','.com','hello'];
// function fun(a,b,c){
//   console.log(a,b,c);
// }

// fun(...arr);

// // in的用法
// let obj = {
//   a: 'itxing',
//   b: '.com'
// }
// console.log('a' in obj)

// // 数组的判断
// let arr = [,,,,,]
// console.log(arr.length)
// console.log(0 in arr)
// let arr1 = ['itxing', '.com']
// console.log(0 in arr1)


// // 数组遍历的方法 forEach filter some map
// let arr = ['itxing', '.com', 'hello']
// arr.forEach((val, index) => console.log(index, val))

// arr.filter(x => console.log(x))

// arr.some(x => console.log(x))

// arr.map(x => console.log(x))

// // join()方法
// let arr = ['itxing', '.com', 'hello']
// console.log(arr.join('|'))
// console.log(arr.toString())

// // 第十一节 ES6中的对象
// let name = 'itxing'
// let skill = 'web'
// let obj = {name, skill}
// console.log(obj)

// // 对象key值构建
// let key = 'skill'
// let obj = {
//   [key]: 'web'
// }
// console.log(obj.skill)

// // 自定义对象方法
// const obj = {
//   add: function(a,b) {
//     return a + b
//   }
// }
// console.log(obj.add(1,2))

// // Object.is() 对象比较
// const obj1 = {name: 'hello'}
// const obj2 = {name: 'world'}
// console.log(obj1.name === obj2.name)
// console.log(Object.is(obj1.name, obj2.name))


// // ===为同值相等，is()为严格相等
// console.log(+0 === -0)
// console.log(NaN === NaN)
// console.log(Object.is(+0, -0))
// console.log(Object.is(NaN, NaN))


// // Object.assign() 合并对象
// const a = {a: 'itxing'}
// const b = {b: 'hello'}
// const c = {c: 'world'}
// const d = Object.assign(a, b, c)
// console.log(d)


// // 第十二节 Symbol在对象中的应用
// const a = new String;
// const b = new Number;
// const c = new Boolean;
// const d = new Array;
// const e = new Object;
// const f = Symbol();
// console.log(typeof(d))
// console.log(typeof(f))

// // 没有toString的是红字，toString的是黑字
// const g = Symbol('itxing')
// console.log('='.repeat(30), g)
// console.log('='.repeat(30), g.toString())

// // Symbol对象元素的保护作用
// // 没有保护的写法
// const obj = { name: 'itxing', skill: 'web', age: 18 }
// for (let item in obj) {
//   console.log(obj[item])
// }


// let obj = {name: 'itxing', skill: 'web'}
// let age = Symbol()
// obj[age] = 18
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     const element = obj[key];
//     console.log('='.repeat(30), element)
//   }
// }

// // 第十三节 Set WeakSet的数据结构
// // Set的声明
// const setArr = new Set(['itxing', '.com', 'hello', 'hello'])
// console.log('='.repeat(30), setArr)

// // Set值的增删查
// setArr.add('haha')
// console.log(setArr)
// setArr.delete('haha')
// console.log(setArr)
// console.log(setArr.has('hello'))
// // setArr.clear()
// console.log('='.repeat(30), setArr)
// for (const item of setArr) {
//   console.log('='.repeat(30), item)
// }


// // size 属性
// const setArr = new Set(['itxing', '.com', 'hello', 'hello'])
// for (const item of setArr) {
//   console.log('='.repeat(30), item)
// }
// console.log('='.repeat(30), setArr.size)

// setArr.forEach(val => console.log(val))

// // WeakSet 声明
// const weakObj = new WeakSet()
// const obj = { a: 'itxing', b: '.com' }
// weakObj.add(obj)
// console.log('='.repeat(30), weakObj)


// // 第十四节 map数据结构
// let json = {
//   name: 'itxing',
//   skill: 'web'
// }
// console.log('='.repeat(30), json.name)

// let json = {
//   name: 'itxing',
//   skill: 'web'
// }
// let map = new Map()
// map.set('a', 'haha')
// console.log('='.repeat(30), map)
// // map的增删查 取值get
// console.log(map.get('a'))
// // 删除 delete
// map.delete('a')
// console.log(map)
// // size属性
// console.log(map.size)
// // 查找是否存在has
// console.log(map.has('a'))
// // 清空所有clear
// map.clear()
// console.log('='.repeat(30), map)


// // 第十五节 Proxy进行预处理
// const obj = {
//   add: function(val) {
//     return val+10
//   },
//   name: 'test'
// }
// console.log(obj.add(100))
// console.log(obj.name)

// // 声明Proxy
// const obj = new Proxy({
//   add: function (val) {
//     return val+10
//   },
//   name: 'I am itxing'
// }, {
//   get: function(target, key, property) {
//     console.log('='.repeat(30), 'come in get')
//     return target[key]
//   },
//   set: function(target, key, value, receiver) {
//     console.log(`setting ${key} = ${value}`)
//     console.log('='.repeat(30), receiver)
//     return target[key] = value
//   }
// })
// console.log(obj.name)
// obj.name = 'hello'
// console.log(obj.name)


// // apply使用
// var targte = function () {
//   return 'I am JSPang';
// };
// var handler = {
//   apply: function(target, ctx, args) {
//     console.log('='.repeat(30), target)
//     console.log('='.repeat(30), ctx)
//     console.log('='.repeat(30), args[0])
//     console.log('do apply');
//     return Reflect.apply(...arguments);
//   }
// }

// var pro = new Proxy(targte, handler);

// console.log(pro('a'));


// 第十六节 promise 对象的使用
var state = 1;
function step1(resolve, reject) {
  console.log('1.开始-洗菜做饭');
  if (state === 1) {
    resolve('洗菜做饭--完成');
  } else {
    reject('洗菜做饭--出错');
  }
}

function step2(resolve, reject) {
  console.log('2.开始-坐下来吃饭');
  if (state === 1) {
    reject('坐下来吃饭--出错');
    resolve('坐下来吃饭--完成');
  } else {
    reject('坐下来吃饭--出错');
  }
}

function step3(resolve, reject) {
  console.log('3.开始-收拾桌子洗碗');
  if (state === 1) {
    reject('收拾桌子洗碗--出错');
    resolve('收拾桌子洗碗--完成');
  } else {
    reject('收拾桌子洗碗--出错');
  }
}

new Promise(step1).then(function (val) {
  console.log(val);
  return new Promise(step2);
}).then(function (val) {
  console.log(val);
  return new Promise(step3);
}).then(function (val) {
  console.log(val);
  return val;
}).catch(function (err) {
  console.log(err);
});
