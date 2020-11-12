<template>
  <carousel></carousel>
</template>

<script>
import carousel from "@/components/common/carousel/carousel";
import Carousel from "@/components/common/carousel/carousel";
export default {
  name: "DetailTopSwiper",
  components: {Carousel},
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>

</style>