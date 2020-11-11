<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>


#tab-bar {
  /*background-color: pink;*/
  position: fixed;
  display: flex;
  height: 49px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(120,120,120,.2);
  box-shadow: 0 -1px 3px rgba(120,120,120,.3);
}

</style>
