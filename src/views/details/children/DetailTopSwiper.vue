<template>
  <carousel  :arrow="arrow" indicator-positon="none" height="350px" class="detail-swiper">
    <el-carousel-item v-for="(item,index) in topImages" :key="index">
      <h3 class="medium">
          <img :src="item" alt="" @load="BannerLoad">
      </h3>
    </el-carousel-item>
  </carousel>
</template>

<script>
//公共组件
import carousel from "@/components/common/carousel/carousel";

export default {
  name: "DetailTopSwiper",
  components: {
    carousel,
  },
  computed:{
    arrow(){
      if (this.topImages.length > 1)
        return 'always'
      else return 'never'
    }
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    BannerLoad(){
      if (!this.IsLoad){
        this.$bus.$emit('DetailBannerLoad')
        this.IsLoad = true
        // console.log('图片加载了');
      }
    }
  }

}
</script>

<style scoped>

.detail-swiper {
  padding-top: 0;
}

</style>