<template>
    <el-carousel :interval="5000" :arrow="arrow" :indicator-position="indicator" :height="height" class="Carousel-box">
     <slot></slot>
    </el-carousel>
</template>

<script>
export default {
  name: "carousel",
  data(){
    return {}
  },
  props:{
    arrow:{
      type:String,
      default(){
        return 'always'
      }
    },
    indicator:{
      type:String,
      default() {
        return "none";
      }
    },
    height:{
      type:String,
      default(){
        return '195px'
      }
    }
  },
  methods:{

  }
}
</script>

<style>
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