<template>
    <el-carousel :interval="5000" arrow="always" height="195px" class="Carousel-box">
      <el-carousel-item v-for="(item1,index) in banners" :key="index">
        <h3 class="medium">
          <a :href="item1.link">
            <img :src="item1.image" alt="" @load="BannerLoad">
          </a>
        </h3>
      </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  name: "carousel",
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
        this.$bus.$emit('BannerLoad')
        this.IsLoad = true
        console.log('图片加载了');
      }
    }
  }
}
</script>

<style scoped>
.Carousel-box {
  padding-top: 44px;
  margin: 0 auto 5px;
  z-index: 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel__item h3 img {
  width: 100%;
  height: 100%;
}
</style>