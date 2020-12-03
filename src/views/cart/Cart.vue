<template>
  <div id="Cart">
    <nav-bar>
      <p slot="center" class="cart-nav">购物车({{ cartItem }})</p>
    </nav-bar>
    <scroll class="Cart-content"
            :pulling-up-load="false"
            ref="scroll">
      <cart-list class="cart-bottom"></cart-list>
    </scroll>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/bscroll/Scroll";
import CartList from "@/views/cart/children/CartList";
import CartBottom from "@/views/cart/children/CartBottom";

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  methods: {},
  computed:{
    ...mapGetters({
      cartItem:'getCartListLength'
    })
  },
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottom
  },
  activated() {
    this.$refs.scroll.refresh();
  }
}
</script>

<style scoped>

.cart-nav {
  color: #eee;
  font-size: 18px;
}

#Cart {
  position: relative;
  height: 100vh;
}

.Cart-content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  overflow: hidden;
  width: 100%;
}

.cart-bottom {
  z-index: 9;

}
</style>
