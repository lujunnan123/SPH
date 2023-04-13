import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 三级联动组件——全局组件
import TypeNav from '@/components/TypeNav'
// 引入路由
import store from '@/store/index'
// 引入MockServe.js
import "@/mock/mockServe"
// 引入swiper样式
import 'swiper/swiper-bundle.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 使用插件
Vue.use(ElementUI)
Vue.config.productionTip = false
// 注册全局组件：第一个参数：全局组件的名字；第二个：哪一个组件
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store,
  // 安装全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
