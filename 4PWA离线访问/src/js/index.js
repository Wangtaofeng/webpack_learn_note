import '../css/index.css'

import $ from 'jquery';

import(/*webpackChunkName: 'print', webpackPrefetch: true*/'./print').then(() => { })

console.log($)

// 生成了serviceworker但是需要在入口文件里注册serviceWorker才能使用
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功了~');
      })
      .catch(() => {
        console.log('sw注册失败了~');
      });
  });
}
