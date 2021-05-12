import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Login from "../components/Login"
import Welcome from '../components/Welcome'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }

export default new Router({
    routes: [
        {
            //默认跳转登录
            path: '/',
            redirect: '/login'
        },

        {
            // 登录页
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            // 首页
            path: '/welcome',
            name: 'Welcome',
            component: Welcome
        }
    ]
});