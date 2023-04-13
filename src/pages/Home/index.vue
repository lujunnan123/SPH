<template>
  <div>
    <!-- 三级联动组件已经注册为全局组件，因此不需要在引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommed></Recommed>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>
<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommed from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
  export default{
    name:'home',
    components:{
      ListContainer,
      Recommed,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>
<style>
</style>