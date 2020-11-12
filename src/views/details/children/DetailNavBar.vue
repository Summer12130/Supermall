<template>
  <div>
    <nav-bar bg-color="#eee">
      <div slot="left" class="nav-back">
        <img src="~assets/images/detail/arrow-thin-left.svg" alt="" @click="BackToHome">
      </div>
      
      <div slot="center" class="navbar">
        <span v-for="(item,index) in title"
              class="navbar-item"
              :class="{active:index === currentIndex}"
              @click="IndexChange(index)">
          {{ item }}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods:{
    IndexChange(index){
      this.currentIndex = index
    },
    BackToHome(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>

.navbar {
  display: flex;
}

.navbar-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.nav-back {
  width: 25px;
  height: 25px;
  text-align: center;
}
.nav-back img {
  width: 100%;
  margin: 10px 0 0 10px;
}

</style>