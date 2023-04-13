<template>
  <div>
    <Header></Header>
    
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
  export default{
    components:{
      Header,
      Footer
    },
    mounted() {
        // 通知Vuex发送请求，获取数据，存储与仓库当中
        this.$store.dispatch('categoryList')  
    },
  }
</script>
<style lang="less">
</style>