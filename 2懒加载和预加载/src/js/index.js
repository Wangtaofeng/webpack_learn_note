import '../css/index.css'

import $ from 'jquery';

// 引入的方式使用import方法即可实现懒加载, 因为是异步的, 不会立即去执行, 并且不会重复加载
// 在注释中再加上webpackPrefetch为true即可实现预加载
// 懒加载是只有在用的时候才加载, 预加载是在主线程完成后用之前加载, 不会占用主线程的时间

import(/*webpackChunkName: 'print', webpackPrefetch: true*/'./print').then(() => { })

console.log($)
