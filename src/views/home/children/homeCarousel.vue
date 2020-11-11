<template>
  <carousel :banners="banners" ></carousel>
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
  methods:{

  }
}
</script>

<style scoped>

</style>