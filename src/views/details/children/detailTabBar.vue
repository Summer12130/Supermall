<template>
  <div class="bottom-tabBar">
    <div><img src="~assets/images/detail/service.png" alt="">
      <p>客服</p></div>
    <div><img src="~assets/images/detail/shop.png" alt="">
      <p>店铺</p></div>
    <div><img src="~assets/images/detail/collect.png" alt="">
      <p>收藏</p></div>
    <div @click="addToCart">加入购物车</div>
    <div>购买</div>

  </div>
</template>

<script>
export default {
  name: "detailTabBar",
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>

.bottom-tabBar {
  display: flex;
  height: 49px;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}

.bottom-tabBar div {
  flex: 1;
  text-align: center;
}

.bottom-tabBar div img {
  width: 40%;
  padding-bottom: 0;
  margin-bottom: 0;
  color: #aaa;

}

.bottom-tabBar div:nth-of-type(4),
.bottom-tabBar div:nth-of-type(5) {
  flex: 1.5;
  text-align: center;
  line-height: 49px;
}
.bottom-tabBar div:nth-of-type(4) {
  background-color: #ee0;
}
.bottom-tabBar div:nth-of-type(5) {
  background-color: var(--color-high-text);
  color: #eee;
}


</style>