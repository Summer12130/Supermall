<template>

  <div class="cart-item">
    <div class="check-item">
      <check-button @click.native="isChecked" :is-show="product.checked" class="blank-item"></check-button>
    </div>
    <div class="item-img">
      <img :src="'http:'+product.image" alt="">
    </div>
    <div class="item-desc">
      <p>{{ product.title }}</p>
      <p>{{ product.desc }}</p>
      <p>
        <span>{{ '￥' + product.price }}</span>
        <span> {{ 'X' + product.count }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/views/cart/children/CheckButton";

export default {
  name: "CartItem",
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    isChecked() {
      this.product.checked = !this.product.checked
    }
  }
}
</script>

<style scoped>


.cart-item {
  display: flex;
  width: 100%;
  padding: 10px 10px 10px 0;
  /*border-bottom: 1px solid #999;*/
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}

.cart-radio {

}

.check-item {
  width: 44px;
}
.blank-item {
  width: 30px;
  height: 30px;
}

.item-img {
  flex: 1;
  display: flex;
  justify-content: center;
}

.item-img img {
  display: inline-block;
  width: 100%;
  margin: auto 0;
  border-radius: 10px;
  z-index: 9;
}

.item-desc {
  flex: 2.5;
  border-radius: 5px;
  padding: 10px;
  /*防止flex布局失效*/
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}


.item-desc p:nth-of-type(1) {
  flex: 1;
  color: black;
  font-size: 20px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-desc p:nth-of-type(2) {
  flex: 1;
  margin: 10px 0;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-desc p:nth-of-type(3) span:nth-of-type(1) {
  flex: 1;
  color: orange;
  float: left;
  font-size: 24px;
}

.item-desc p:nth-of-type(3) {
  line-height: 24px;
}

.item-desc p:nth-of-type(3) span:nth-of-type(2) {
  float: right;
  font-size: 18px;
}

.checkButton {
  height: 30px;
  width: 30px;
}
</style>