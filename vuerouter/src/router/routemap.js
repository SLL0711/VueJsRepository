// 路由映射配置

// import home from '../components/Home'
// import about from '../components/About'
// import user from '../components/user'
const home = () => import('../components/Home')
const about = () => import('../components/About')
const user = () => import('../components/user')
const HomeNews = () => import('../components/HomeNews')
const HomeMsg = () => import('../components/HomeMsg')
const Profile = () => import('../components/Profile')

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        meta:{
            title:'首页'
        },
        children: [
            {
                path: '',
                // component: HomeNews,
                redirect:'/home/homeNews'
            },
            {
                path: 'homeNews',
                component: HomeNews
            },
            {
                path: 'homeMsg',
                component: HomeMsg
            }
        ]
    },
    {
        path: '/about',
        component: about,
        meta:{
            title:'关于'
        },
    },
    {
        path: '/user/:userId',
        component: user,
        meta:{
            title:'用户信息'
        },
    },
    {
        path: '/profile',
        component: Profile,
        meta:{
            title:'档案'
        },
    }
]

export default routes