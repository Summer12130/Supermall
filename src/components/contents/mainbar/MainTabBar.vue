<template>
<div>
  <tab-bar>
    <tabbar-item path="/home" >
      <div  slot="item-img"><img src="~assets/images/tabbar/home.png" alt=""></div>
      <div  slot="item-img-active"><img src="~assets/images/tabbar/home_active.png" alt=""></div>
      <p slot="item-text">首页</p>
    </tabbar-item>
    <tabbar-item path="/category">
      <div slot="item-img"><img src="~assets/images/tabbar/category.png" alt=""></div>
      <div slot="item-img-active"><img src="~assets/images/tabbar/category_active.png" alt=""></div>
      <p slot="item-text">分类</p>
    </tabbar-item>
    <tabbar-item path="/cart">
      <div slot="item-img"><img src="~assets/images/tabbar/cart.png" alt=""></div>
      <div slot="item-img-active"><img src="~assets/images/tabbar/cart_active.png" alt=""></div>
      <p slot="item-text">购物车</p>
    </tabbar-item>
    <tabbar-item path="/profile">
      <div slot="item-img"><img src="~assets/images/tabbar/profile.png" alt=""></div>
      <div slot="item-img-active"><img src="~assets/images/tabbar/profile_active.png" alt=""></div>
      <p slot="item-text">我</p>
    </tabbar-item>
  </tab-bar>
</div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import tabbarItem from "components/common/tabbar/tabbarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    tabbarItem
  }
}
</script>

<style scoped>

</style>
