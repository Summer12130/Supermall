<template>
  <div class="tab-bar">
    <div class="tab-bar-item" v-for="(item,index) in titles"  @click="TabBarClick(index)">
      <span :class="{active:currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    TabBarClick(index){
      this.currentIndex = index
      this.$emit('GoodsListChange',index)
    }
  }

}
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 40px;
  line-height: 35px;
  background-color: #eee;
}
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}

</style>