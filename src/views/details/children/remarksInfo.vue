<template>
  <div id="remark" v-if="this.UserRemark != undefined">
    <div class="remark-head">
      <span>用户评价</span>
      <span>更多</span>
    </div>
  <div class="remark-item" v-for="(item,index) in this.UserRemark">
    <div class="user-box" >
      <img :src="'http:'+item.user.avatar" alt="">
      <span>{{item.user.uname}}</span>
    </div>
    <div class="remark-content">
      <p class="user">
        {{item.content}}
        <span class="remark-time">{{item.created}}</span>
        <span class="item-style">{{item.style}}</span>
      </p>
      <div class="user-image" v-if="item.image != undefined">
          <img :src="img" alt="" v-for="img in item.image ">
      </div>
      <p class="seller" v-if="item.explain">{{item.explain}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "remarksInfo",
  props: {
    dRemarkInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    time(){

    }
  },
  data(){
    return {
      user:{},
      UserRemark:[]
    }
  },
  created() {

  },
  watch:{
    dRemarkInfo(){

      if (this.dRemarkInfo.list){
        for (let item of this.dRemarkInfo.list){
          this.user.user = item.user
          this.user.content = item.content
          this.user.explain = item.explain
          this.user.style = item.style
          this.user.created = (new Date(item.created *1000)).toLocaleString()
          this.user.image = item.images
          this.UserRemark.push(this.user)
        }
      }
      // console.log(this.UserRemark);
    }
  }
}

</script>

<style scoped>

#remark {
  width: 90%;
  margin: 40px auto 0;
}

.remark-head {
  border: 1px solid var(--color-low-text);
  padding: 20px;
  position: relative;
}
.remark-head span {
  font-size: 18px;
}

.remark-head span:nth-of-type(1) {
  /*float: left;*/
}

.remark-head span:nth-of-type(2) {
  position: absolute;
  right: 5%;
}

.user-box {
  position: relative;
  margin: 10px auto;
}
.user-box img{
  width: 60px;
  height: 60px;
  border-radius: 100%;
}
.user-box span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  font-size: 18px;
}
.remark-content {

}

.remark-item {
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--color-low-text);
}

.user {
  position: relative;
  background: #ddd;
  padding: 10px 10px 25px;
  border-radius: 5px;
}

.user-image {
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
}

.user-image img {
  width: 25%;
  height: 100%;
  margin: 10px;
  border-radius: 5px;
}
.seller {
  margin-top: 5px;
  padding: 10px;
  border-radius: 5px;
  color: #ddd;
  background: #aaaaaa;
}
.remark-time {
  position: absolute;
  bottom: 0;
  left: 10px;
  color: #999;
}
.item-style {
  position: absolute;
  bottom: 0;
  right: 10px;
  color: #999;
}

</style>