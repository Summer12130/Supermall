<template>
  <ul class="recommend-table">
    <li v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeRecommand",
  props:{
    recommends:{
      type:Array,
      data(){
        return []
      }
    }
  }
}
</script>

<style scoped>

.recommend-table {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid rgba(100,100,100,.2);
}

.recommend-item {
  flex:1;
  padding: 5px;
}

.recommend-item a {
  width: 100%;
}
.recommend-item img {
  width: 100%;
}
.recommend-item p {
  color: #777;
  text-align: center;
  margin-top: 8px;
}
</style>