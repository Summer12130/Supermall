<template>
<div class="tabbar-item" @click="itemClick" :style="ActiveStyleBox">
  <div v-if="!isActive"><slot name="item-img"></slot></div>
  <div v-else><slot name="item-img-active"></slot></div>
  <div :style="ActiveStyle"><slot name="item-text" ></slot></div>
</div>
</template>

<script>
export default {
  name: "tabbarItem",
  methods:{
    itemClick(){
      //跳转路由
      // console.log('itemClick');
      // console.log(this.path);
      // console.log(this.path);
      // console.log('当前 -->'+this.$route.path);
      //this.path是点击元素时传进来的path
      //$route.path是当前活跃的path
      // let flag = this.$route.path.indexOf(this)
      // console.log(flag);
      if (this.$route.path.indexOf(this.path) == -1){
        this.$router.replace(this.path)
      }
    }
  },
  props:{
    path:String,
    ActiveColor:{
      type:String,
      default:'#fa6f8a'
    },
    ActiveBgColor:{
      type:String,
      default: '#c0c0c0'
    }
  },
  data(){
    return {

    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    ActiveStyle(){
      return this.isActive ? {color:this.ActiveColor} : {}
    },
    ActiveStyleBox(){
      return this.isActive ? {backgroundColor:this.ActiveBgColor } : {}
    }
  }
}
</script>

<style scoped>


.tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-item img {
  height: 25px;
  width: 25px;
  vertical-align: middle;
}
.tabbar-item p {
  margin: 2px 0 0;
  font-size: 14px;
}
</style>
