<template>
  <div id="detail">
<!--    <h1>{{this.iid}}</h1>-->
    <detail-nav-bar></detail-nav-bar>
    <detail-top-swiper :top-images="TopImages"></detail-top-swiper>
  </div>
</template>

<script>
import DetailNavBar from "@/views/details/children/DetailNavBar";
import DetailTopSwiper from "@/views/details/children/DetailTopSwiper";

import {getDetail} from "@/network/detail";

export default {
  name: "Details",
  components: {
    DetailNavBar,
    DetailTopSwiper
  },
  data() {
    return {
      iid:null,
      res:null,
      TopImages:[]
    }
  },
  created() {
    //保存请求对象的iid
    this.iid = this.$route.params.iid
    //请求对象的数据
    this.res = getDetail(this.iid).then(res => {
      this.TopImages.push(...res.result.itemInfo.topImages)
      console.log(this.TopImages[0]);
    })

  }
}
</script>

<style scoped>

</style>