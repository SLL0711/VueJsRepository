// 路由映射配置

const home = () => import('../views/home/home.vue')
const category = () => import('../views/category/category.vue')
const cars = () => import('../views/cars/car.vue')
const profile = () => import('../views/profile/profile.vue')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/cars',
        component: cars
    },
    {
        path: '/profile',
        component: profile
    },
]

export default routes