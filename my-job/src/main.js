// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

import VueWechatTitle from 'vue-wechat-title'

import MintUI from 'mint-ui'
Vue.use(require('vue-wechat-title'))
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
  	eventHub: new Vue()
  }
})