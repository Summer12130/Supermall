<template>
  <div id="detail">
    <detail-nav-bar @dNavBarChange="dNavBarChange" ref="dNavBar"></detail-nav-bar>
    <detail-tab-bar @addToCart="addToCart"></detail-tab-bar>
    <scroll class="detail-content"
            :pulling-up-load="true"
            ref="scroll1"
            :probe-type="3"
            @scroll="ScrollListener"
    >
      <detail-top-swiper :top-images="TopImages"></detail-top-swiper>
      <items-info :d-item-info="detailItemInfo"></items-info>
      <shops-info :d-shop-info="detailShopInfo"></shops-info>
      <details-info :d-detail-info="detailDetailInfo"></details-info>
      <params-info :d-params-info="detailParamInfo" ref="params"></params-info>
      <remarks-info :d-remark-info="detailRemarkInfo" ref="remarks"></remarks-info>
      <recommends-info :d-recommend-info="detailRecommendInfo"
                       @RecommendLoad="RecommendLoad" ref="recommends"></recommends-info>
      <!--      <goods-list :goods="detailRecommendInfo"></goods-list>-->
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/bscroll/Scroll";
import GoodsList from "@/components/contents/goodslist/GoodsList";

import DetailNavBar from "@/views/details/children/DetailNavBar";
import DetailTopSwiper from "@/views/details/children/DetailTopSwiper";
import detailTabBar from "@/views/details/children/detailTabBar";
import ItemsInfo from "@/views/details/children/ItemsInfo";
import shopsInfo from "@/views/details/children/shopsInfo";
import detailsInfo from "@/views/details/children/detailsInfo";
import paramsInfo from "@/views/details/children/paramsInfo";
import remarksInfo from "@/views/details/children/remarksInfo";
import recommendsInfo from "@/views/details/children/recommendsInfo";

import {getDetail, getRecommend, itemInfo, shopInfo, detailInfo, paramInfo, remarkInfo} from "@/network/detail";
import {debounce} from "@/common/utils";

export default {
  name: "Details",
  components: {
    DetailNavBar,
    DetailTopSwiper,
    Scroll,
    itemInfo,
    ItemsInfo,
    shopInfo,
    shopsInfo,
    detailInfo,
    detailsInfo,
    paramInfo,
    paramsInfo,
    remarksInfo,
    remarkInfo,
    recommendsInfo,
    detailTabBar
  },
  data() {
    return {
      iid: null,
      res: null,
      recommend: null,
      dTopY: null,
      refresh: null,
      dScrollY:null,
      product:null,
      currentIndex:0,
      TopImages: [],
      DetailImages: [],
      DetailKeys: [],
      detailItemInfo: {},
      detailShopInfo: {},
      detailDetailInfo: {},
      detailParamInfo: {},
      detailRemarkInfo: {},
      detailRecommendInfo: [],
      dNavBarTopY: []
    }
  },
  methods: {
    RecommendLoad() {
      this.$refs.scroll1.scroll.refresh()
    },
    dNavBarChange(index) {
      // console.log(index);
      this.$refs.scroll1.scrollTo(0, -this.dNavBarTopY[index], 500)
    },
    ScrollListener(position){
      this.dScrollY = -position.y
      const length = this.dNavBarTopY.length
      for (let i = 0 ; i < length -1;i++){
        if ((this.currentIndex !== i) && (this.dScrollY >= this.dNavBarTopY[i] && this.dScrollY < this.dNavBarTopY[i+1])){
          this.currentIndex = i
          this.$refs.dNavBar.currentIndex = this.currentIndex
        }
      }
    },
    addToCart(){
      this.$store.dispatch('addToCart',this.product)

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
      //商品详情
      this.detailItemInfo = new itemInfo(res.result.itemInfo, res.result.columns, res.result.itemInfo.extra)
      //店铺详情
      this.detailShopInfo = new shopInfo(res.result.shopInfo)
      //将对象中对多个数组的图片和key合并后传入
      const a = res.result.detailInfo
      for (let i = 0; i < a.detailImage.length; i++) {
        this.DetailImages.push(...a.detailImage[i].list)
        this.DetailKeys.push(a.detailImage[i].key)
      }
      //细节详情
      this.detailDetailInfo = new detailInfo(a, this.DetailKeys, this.DetailImages)
      // console.log(this.detailDetailInfo);
      //参数详情
      this.detailParamInfo = new paramInfo(res.result.itemParams)
      // console.log(this.detailParamInfo);
      //评论详情
      this.detailRemarkInfo = new remarkInfo(res.result.rate)
      // console.log(this.detailRemarkInfo);

      // console.log(this.detailItemInfo);

      const product = {}
      product.image = this.TopImages[0]
      product.title = this.detailItemInfo.title
      product.price = this.detailItemInfo.realPrice
      product.desc = this.detailItemInfo.desc
      product.checked = true
      product.count = 1
      product.iid = this.iid
      this.product = product
      console.log(this.product);

    })
    //请求推荐数据
    this.recommend = getRecommend().then(res => {
      this.detailRecommendInfo.push(...res.data.list)
      // console.log(this.detailRecommendInfo);
    })
    //获取topY
    this.dTopY = debounce(() => {
          if (this.$refs.recommends && this.$refs.params && this.$refs.recommends) {
            this.$nextTick(() => {
              this.dNavBarTopY.push(0)
              this.dNavBarTopY.push(this.$refs.params.$el.offsetTop)
              this.dNavBarTopY.push(this.$refs.remarks.$el.offsetTop)
              this.dNavBarTopY.push(this.$refs.recommends.$el.offsetTop)
              this.dNavBarTopY.push(Number.MAX_VALUE)
            })
          }
        }
        , 100)

  },
  mounted() {

    this.refresh = debounce(this.$refs.scroll1.refresh, 200)
    this.$bus.$on('DetailBannerLoad', () => {
      this.refresh()
    })
    this.$bus.$on("detailImageLoad", () => {
      // console.log('刷新了');
      this.refresh()
      this.dTopY()
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