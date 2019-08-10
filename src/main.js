import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局引入axios
// axios的post方法默认使用application/json格式编码数据，所以前端要将将Content-Type格式为application/x-www-form-urlencoded
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
import qs from 'qs'
Vue.prototype.$qs = qs;
// Vue继承axios
Vue.prototype.$axios = axios


Vue.config.productionTip = false
// 引入vants组件
import Vant from './vants/index';
Vant();

import Element from './elements/index';
Element();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')