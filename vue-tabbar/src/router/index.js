import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routermap'

Vue.use(VueRouter)

const vueRuter = new VueRouter({
    routes
})

export default vueRuter