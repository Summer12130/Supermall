<template>
  <div id="shopInfo">
    <ul class="shop-services">
      <li v-for="(item,index) in dShopInfo.services" :key="index">
        <img :src="'http:'+item.icon" alt="">
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div class="shopLogo">
      <img :src="'http:'+dShopInfo.shopLogo" alt="">
      <span class="shopName">{{ dShopInfo.name }}</span>
    </div>
    <div class="shopRemark">
      <div class="remark-left">
        <div>
          <p>{{ dShopInfo.cSells }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ dShopInfo.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
        <div class="remark-right"></div>
      </div>
      <div class="remark-right">
        <ul>
          <li v-for="(item,index) in dShopInfo.score" :key="index">
            {{ item.name }}
            <span class="shop-score" :style="{color:item.score > 4.85 ? 'red' : ''}">{{ item.score }}</span>
            <span v-if="item.score > 4.85"
                  :style="{backgroundColor:item.score > 4.85 ? 'red' : ''}">高</span>
            <span v-else>低</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="toShop" @click="toShop">进店逛逛</div>
  </div>
</template>

<script>
import {itemInfo} from "@/network/detail";

export default {
  name: "shopsInfo",
  props: {
    dShopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    toShop(){
      window.location.href = this.dShopInfo.allGoodsUrl
    }
  },
  computed:{

  }
}
</script>

<style scoped>

#shopInfo {
  border-bottom: 1px solid var(--color-low-text);
  padding-bottom: 10px;

}
.shop-services {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.shop-services li {
  flex: 1;
  list-style: none;
  font-size: 12px;
  margin-top: 15px;
  text-align: center;
}

.shop-services li span {
  padding: 5px 0;
  border-bottom: 1px solid var(--color-low-text);
}

.shop-services li img {
  width: 10px;
  height: 10px;
}

.shopLogo {
  padding: 0 0 100px 30px;
  height: 70px;
  position: relative;
}

.shopLogo img {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid var(--color-low-text);
}

.shopLogo span {
  font-size: 20px;
  color: var(--color-low-text);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 30%;
}

.shopRemark {
  display: flex;
  text-align: center;
  padding: 10px 10px;

}

.remark-left {
  flex: 1;
  border-right: 1px solid var(--color-low-text);
}

.remark-left div {
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
}

.remark-left div p:nth-of-type(1) {
  font-size: 25px;
}

.remark-left div p:nth-of-type(2) {
  font-size: 14px;
}

.remark-right {
  flex: 1;
}

.remark-right ul {
  list-style: none;
  padding-left: 30px;
}

.remark-right ul li {
  text-align: left;
  margin-bottom: 8px;
}
.remark-right ul li span:nth-of-type(1) {
  /*background-color: lightgreen;*/
  border-radius: 5px;
  color: lightgreen;
}
.remark-right ul li span:nth-of-type(2) {
  margin-left: 8px;
  padding: 3px 5px;
  background-color: lightgreen;
  border-radius: 5px;
  color: var(--color-low-text);
}
.toShop {
  text-align: center;
  width: 150px;
  height: 30px;
  margin: 3px auto;
  line-height: 30px;
  border: solid 1px var(--color-low-text);
  background-color: #ddd;
  border-radius: 4px;
}
</style>