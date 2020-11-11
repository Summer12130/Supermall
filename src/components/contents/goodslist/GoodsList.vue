<template>
  <div class="goodslist">
    <goods-item :good-item="item" v-for="(item,index) in goods" :key="index" class="goods-items"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "@/components/contents/goodslist/GoodsItem";

export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

.goods-items {
  width: 48%;
}


</style>