<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="detail-content"
            :pulling-up-load="true"
            ref="scroll1"
    >
      <detail-top-swiper :top-images="TopImages"></detail-top-swiper>
      <items-info :d-item-info="detailItemInfo"></items-info>
      <shops-info :d-shop-info="detailShopInfo"></shops-info>
      <details-info :d-detail-info="detailDetailInfo"></details-info>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/bscroll/Scroll";


import DetailNavBar from "@/views/details/children/DetailNavBar";
import DetailTopSwiper from "@/views/details/children/DetailTopSwiper";
import ItemsInfo from "@/views/details/children/ItemsInfo";
import shopsInfo from "@/views/details/children/shopsInfo";
import detailsInfo from "@/views/details/children/detailsInfo";

import {getDetail, itemInfo, shopInfo, detailInfo} from "@/network/detail";
import {debounce} from "@/common/utils";
import DetailsInfo from "@/views/details/children/detailsInfo";

export default {
  name: "Details",
  components: {
    DetailsInfo,
    DetailNavBar,
    DetailTopSwiper,
    Scroll,
    itemInfo,
    ItemsInfo,
    shopInfo,
    shopsInfo
  },
  data() {
    return {
      iid: null,
      res: null,
      TopImages: [],
      detailItemInfo: {},
      detailShopInfo: {},
      detailDetailInfo: {}
    }
  },
  created() {
    //保存请求对象的iid
    this.iid = this.$route.params.iid
    //请求对象的数据
    this.res = getDetail(this.iid).then(res => {
      // console.log(res.result);
      this.TopImages.push(...res.result.itemInfo.topImages)
      console.log(res.result);
      //商品详情itemsInfo
      this.detailItemInfo = new itemInfo(res.result.itemInfo, res.result.columns, res.result.itemInfo.extra)
      this.detailShopInfo = new shopInfo(res.result.shopInfo)
      this.detailDetailInfo = new detailInfo(res.result.detailInfo)
      console.log(this.detailDetailInfo);
    })

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll1.refresh, 200)
    this.$bus.$on('DetailBannerLoad', () => {
      // refresh()
    })
    this.$bus.$on("detailImageLoad", () => {
      // console.log('刷新了');
      refresh()
    })
  }
}
</script>

<style scoped>

#detail {
  position: relative;
  height: 100vh;
}

.detail-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  width: 100%;
}

</style>