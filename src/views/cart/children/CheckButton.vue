<template>
  <div class="tickBox" >
    <img src="~assets/images/common/checkmark.svg" alt="" v-show="isShow" :style="{width:checkSize,height:checkSize}">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    checkSize:{
      type:String,
      default: '30px'
    }
  }
}
</script>

<style scoped>

.tickBox {
  border-radius: 100%;
  border: 2px solid #ccc;
  margin: 0 5px;

}

.tickBox img {
  width: 100%;
}


</style>