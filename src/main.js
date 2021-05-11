import Vue from 'vue';

//引入axios作为全局属性便于请求api
import axios from 'axios'
Vue.prototype.$axios = axios

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import '../public/public.css'
Vue.use(ElementUI);

//import VueRouter from 'vue-router'
//Vue.use(VueRouter)

//引用router.js 路由
//import router from './router.js'

//引用全局常量和方法等作为vue的属性
import globalUse from './gloabal.js'
Vue.prototype.GLOABALUSE = globalUse

new Vue({
  el: '#app',
  //router,
  render: h => h(App)
});