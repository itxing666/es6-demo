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

// let [a, b='']
"use strict";
