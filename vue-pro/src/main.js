// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

import Vant from 'vant'
import LazyLoad from 'vue-lazyload'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/vant-css/index.css';
import 'vant/lib/vant-css/icon-local.css';

import '@/styles/index.scss';
import '@/assets/iconfont/iconfont.css';




Vue.config.productionTip = false
Vue.use(LazyLoad)
Vue.use(Vant)
Vue.use(ElementUi)

console.log(store)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
