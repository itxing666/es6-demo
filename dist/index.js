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
"use strict";
