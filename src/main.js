import Vue from 'vue'
import App from './App.vue'
import router from './router'




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