<template>
  <div id="detailInfo">
    <p class="desc">{{ dDetailInfo.desc }}</p>
    <div class="detail" v-if="dDetailInfo">
      <span v-for="(items,index1) in dDetailInfo.key"
            :key="index1">{{ items }}</span>
      <img :src="'http:'+item"
           alt=""
           v-for="(item,index) in dDetailInfo.detailImage"
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
  data() {
    return {
      imgCount: 0,
      ModelImagesLength:0
    }
  },
  methods: {
    detailImageLoad() {
      if (++this.imgCount == this.ModelImagesLength){
        this.$bus.$emit('detailImageLoad')
      }

    }
  },
  watch:{
    dDetailInfo(){
      this.ModelImagesLength = this.dDetailInfo.detailImage.length
    }
  },
  created() {


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

.detail span {
  display: inline-block;
  font-size: 20px;
  color: #ff5777;
  padding: 10px 15px;
}

.detail img {
  width: 100%;
  height: 100%;
}

</style>