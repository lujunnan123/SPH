// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)
// 引入路由组件
import routes from './routes'
// 先把VueRouter原型对象的push进行备份
/* call||apply区别：
相同点：都可以调用函数一次，都可以篡改函数的上下文一次
不同点：call与apple传递参数：call传递参数用逗号隔开，apply方法执行，传递数组 */
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace
// 第一个参数：告诉原来push方法，你往哪里跳转
// 第二个参数：成功的回调
// 第二个参数：失败的回调
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this.location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{ },()=>{ })
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this.location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{ },()=>{ })
    }
}

// 暴露路由
export default new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        // y：距离顶部距离
        return {y:0}
    }
})