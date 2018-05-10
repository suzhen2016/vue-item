// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store' // 引入store对象
import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'

Vue.use(vueScrollBehavior, { router: router })

/* eslint-disable no-new */
// 实例化一个vue组件
new Vue({
  el: '#app',
  router,
  store, // 注入到跟实例中
  template: '<App/>',
  components: { App }
})
