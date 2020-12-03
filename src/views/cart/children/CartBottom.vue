<template>
  <div class="bottom-aria">
    <div class="bottom-content">
      <check-button check-size="20px"
                    :is-show="allSelect"
                    class="blank-item"
                    @click.native="selectAll">

      </check-button>
    </div>
    <span>全选</span>
    <div class="totalPrice">共计 {{ '￥' + totalPrice }}</div>
    <div class="item-buy" @click="toSettleAccount">去结算({{ finalLength }})</div>
  </div>
</template>

<script>

import CheckButton from "@/views/cart/children/CheckButton";

export default {
  name: "CartBottom",
  components: {
    CheckButton
  },
  methods:{
    selectAll(){
      if (this.allSelect){
        //全部都选中则变为不选
        this.$store.state.productList.forEach(res => res.checked = false)
      }else {
        //部分选中或某些没选中变为全选
        this.$store.state.productList.forEach(res => res.checked = true)
      }
    },
    toSettleAccount(){
      if (!this.allSelect){
        //未选择商品
        this.$toast.show('请选择要购买的商品')
      }
    }
  },
  computed: {
    totalPrice() {
      return this.$store.state.productList.filter(res => {
        return res.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    finalLength() {
      return this.$store.state.productList.filter(res => {
        return res.checked
      }).length
    },
    allSelect() {
      if (this.$store.state.productList.length === 0){
        return false
      }else
      return this.$store.state.productList.length === this.$store.state.productList.filter(res => {
        return res.checked
      }).length
    }
  }
}
</script>

<style scoped>

.bottom-aria {
  position: fixed;
  display: flex;

  height: 30px;
  bottom: 49px;
  padding: 0 30px;
  margin-bottom: 1px;

  width: 100%;


}

.blank-item {
  width: 20px;
  height: 20px;
}

.bottom-content {
  /*display: inline-block;*/
  width: 35px;

}

.bottom-aria span {
  line-height: 30px;
  flex: 1;
}

.totalPrice {
  flex: 3;
  line-height: 30px;
  text-align: center;
}

.item-buy {
  flex: 2;
  background-color: #ff5777;
  text-align: center;
  line-height: 30px;
  color: #eee;
}

</style>