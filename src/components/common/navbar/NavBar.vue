<template>
  <div class="nav-bar" :style="BackGroungColor">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
    bgColor:{
      type:String,
      default:'#ff6788'
    }
  },
  computed:{
    BackGroungColor(){
      return {backgroundColor:this.bgColor}
    }
  }
}
</script>

<style scoped>

.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  color: #777;
  font-size: 15px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

.left,
.right {
  width: 60px;
  height: 44px;
  text-align: center;
}

.center {
  flex: 1;
  width: 60px;
  height: 44px;
  text-align: center;
}


</style>