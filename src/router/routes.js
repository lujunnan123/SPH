
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
import Detail from '../pages/Detail'
export default[
        {
            path:"/home",
            component:Home,
            // 路由元信息
            meta:{show:true}
        },
        {
            path:"/search/:keyword?",
            name:'search',
            component:Search,
            meta:{show:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        {
            // 传递params参数，需要用到占位符 /:
            path:"/detail/:skuid",
            component:Detail,
            meta:{show:false}
        },
        {
            // 重定向：在项目跑起来的时候，访问/，立马让他定向到首页
            path:'*',
            redirect:'/home',
            meta:{show:false}
        }
    ]