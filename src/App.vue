<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <tabbar-item path="/home" activeColor="red">
        <img slot="slot-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="slot-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="slot-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" activeColor="green">
        <img slot="slot-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="slot-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="slot-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" activeColor="blue">
        <img slot="slot-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <img slot="slot-icon-active" src="./assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="slot-text">购物车</div>
      </tabbar-item>

      <tabbar-item path="/profile">
        <img slot="slot-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="slot-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="slot-text">我的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from "./components/tabbar/Tabbar"
  import TabbarItem from "./components/tabbar/Tabbar-item"

  export default {
    name: 'App',
    components: {
      // 引入组件之后需要进行刚注册
      Tabbar,
      TabbarItem
    }
  }

</script>

<style>
  @import "./assets/css/base.css";
</style>
