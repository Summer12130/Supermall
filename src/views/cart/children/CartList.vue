<template>
  <div class="cart-list">
    <cart-item v-for="(item,index) in getCartList" :product="item" :key="index"></cart-item>
  </div>
</template>

<script>

import CartItem from "@/views/cart/children/CartItem";

import {mapGetters} from 'vuex'

export default {
  name: "CartList",
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['getCartList'])
  }
}
</script>

<style scoped>
.cart-list {
  width: 95%;
  margin: 0 auto;
}
</style>