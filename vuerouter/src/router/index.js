// 配置路由相关信息
import Router from 'vue-router'
import Vue from 'vue'
import routes from './routemap'

// 使用步骤
// 1.Vue.use(插件),安装插件
Vue.use(Router);

// 2.创建路由对象
// 配置路径和组件的映射关系

const router = new Router({
    routes,
    // linkActiveClass:'hhh'
    // mode:'history'
})

router.beforeEach((to, from, next) => {
    // ...
    next();
    document.title = to.matched[0].meta.title
})

// 3.将Router对象传入Vue
export default router
