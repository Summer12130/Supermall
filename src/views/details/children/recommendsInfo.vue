<template>
  <div id="recommend" v-if="dRecommendInfo" class="recommend-list">
    <div v-for="(item,index) in dRecommendInfo" class="recommend-item">
      <div href="" @click="RecommendTrans(index)">
        <img :src="item.image" alt="" @load="RecommendLoad">
      </div>
      <p>{{ item.title }}</p>
      <div class="item-info">
        <span>{{ '￥' + item.discountPrice }}</span>
        <span>{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendInfo",
  props: {
    dRecommendInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      loadCount:0
    }
  },
  methods:{
    RecommendTrans(index){
      // console.log(index);
      const params = this.dRecommendInfo[index].item_id
      this.$router.push('/detail/' + params)
    },
    RecommendLoad(){

      if (++this.loadCount == this.dRecommendInfo.length){
        this.$emit('RecommendLoad')
      }
    }
  }
}
</script>

<style scoped>



.recommend-list {
  margin-top: 30px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recommend-item {
  padding: 20px 0;
  width: 48%;
}

.recommend-item img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
.recommend-item p {
  color: #ff5777;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item-info {
  text-align: center;
}
.item-info span:nth-of-type(1) {
  color: var(--color-low-text);
}
.item-info span:nth-of-type(2):before {
  content: '';
  background:url("../../../assets/images/common/favor.png") 0 2px no-repeat;
  width: 15px;
  height: 15px;
  background-size: 14px;
  display: inline-block;
  margin-left: 3px;

}

</style>