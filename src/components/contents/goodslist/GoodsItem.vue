<template>
  <div class="goods-item">
    <a :href="goodItem.link">
      <img :src="goodItem.show.img" alt="" @load="ImgLoad">
    </a>
    <div class="good-text">
      <span :title="goodItem.title">{{ goodItem.title }}</span>
      <span>{{ goodItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    ImgLoad(){
      this.$bus.$emit('ImgLoadFinish')
    }
  }
}
</script>

<style scoped>

.goods-item {

}

.goods-item a {
  width: 100%;
}

.goods-item img {
  width: 100%;
  border-radius: 10px;
}

.good-text {
  padding: 0.5em;
  font-size: var(--font-size);

}

.good-text span:nth-of-type(1) {
  display: block;
  color: pink;
  font-size: 1px;
  width: 98%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.good-text span:nth-of-type(2) {
  position: relative;
  transform: translateX(-50%);
  left: 30%;
  top: 5px;
}

.good-text span:nth-of-type(2):before {
  content: '';
  width: 14px;
  height: 14px;
  background: url("../../../assets/images/common/favor.png") 0 2px no-repeat;
  background-size: 14px;
  display: inline-block;
  margin-left: 3px;

}

</style>