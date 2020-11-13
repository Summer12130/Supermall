<template>
  <div id="detailInfo">
    <p class="desc">{{ dDetailInfo.desc }}</p>
    <div class="detail" v-if="dDetailInfo.detailImage">
      <p>{{ dDetailInfo.detailImage[0].key }}</p>
      <img :src="'http:'+item"
           alt=""
           v-for="(item,index) in dDetailInfo.detailImage[0].list"
           class="detailImg"
           @load="detailImageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "detailsInfo",
  props: {
    dDetailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    detailImageLoad(){
      this.$bus.$emit('detailImageLoad')
    }
  }
}
</script>

<style scoped>
#detailInfo {
  padding: 10px 30px;
}

.desc {
  margin-top: 10px;
}

.detail p {
  text-align: center;
  margin: 10px auto;
  font-size: 25px;
  color: #ff5777;
}

.detail img {
  width: 100%;
  height: 100%;
}

</style>