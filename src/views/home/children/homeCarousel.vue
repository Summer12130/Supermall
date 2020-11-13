<template>
  <carousel>
    <el-carousel-item v-for="(item1,index) in banners" :key="index">
      <h3 class="medium">
        <a :href="item1.link">
          <img :src="item1.image" alt="" @load="BannerLoad">
        </a>
      </h3>
    </el-carousel-item>
  </carousel>
</template>

<script>
import carousel from "@/components/common/carousel/carousel";

export default {
  name: "homeCarousel",
  components:{
    carousel
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      IsLoad:false
    }
  },
  methods:{
    BannerLoad(){
      if (!this.IsLoad){
        this.$bus.$emit('HomeBannerLoad')
        this.IsLoad = true
        // console.log('图片加载了');
      }
    }
  }
}
</script>

<style scoped>

</style>