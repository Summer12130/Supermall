<template>
  <div id="Home">
    <nav-bar>
      <p slot="center">首页</p>
    </nav-bar>
    <tab-bar :titles="['流行','新款','热选']"
             class="home-tab-bar"
             @GoodsListChange="GoodsIndexChange"
             ref="tabBar1"
             :class="{isShowTabBar:isShowTabBar}"
             v-show="isShowTabBar"
    >
    </tab-bar>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @BackTopShow="BackTopShow"
            :pulling-up-load="true"
            @LoadMore="LoadMore"
    >
      <home-carousel :banners="banners" class="home-banners"></home-carousel>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-bar :titles="['流行','新款','热选']"
               class="home-tab-bar"
               @GoodsListChange="GoodsIndexChange"
               ref="tabBar"
      >
      </tab-bar>
      <goods-list :goods="showGoods"></goods-list>

    </scroll>
    <to-top @click.native="BackToTop" v-show="IsBackTopShow"/>
  </div>
</template>

<script>
//Home下的组件
import homeCarousel from "@/views/home/children/homeCarousel";
import HomeRecommend from "@/views/home/children/HomeRecommend";
import FeatureView from "@/views/home/children/FeatureView";

//公共组件common
import NavBar from "@/components/common/navbar/NavBar";

//公共组件contents
import TabBar from "@/components/contents/tabbar/TabBar";
import GoodsList from "@/components/contents/goodslist/GoodsList";
import Scroll from "@/components/common/bscroll/Scroll";
import toTop from "@/components/contents/totop/toTop";

//引入函数
import {getHomeMultiData, getHomeGoods} from "@/network/home";
import {debounce} from "@/common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    homeCarousel,
    HomeRecommend,
    FeatureView,
    TabBar,
    GoodsList,
    Scroll,
    toTop
  },
  computed: {
    showGoods() {
      return this.goods[this.goodsType[this.goodsIndex]].list
    },

  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      goodsType: ['pop', 'new', 'sell'],
      goodsIndex: 0,
      IsBackTopShow: false,
      offsetTop: 0,
      isShowTabBar:false
    }
  },
  //组件创建时请求数据
  created() {
    //第一次请求
    this.getHomeMultiData()
    //第二次请求
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },
  mounted() {
    //监听图片是否加载完成(组件创建后在监听 否则this.$bus可能还是null\undefined)
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('ImgLoadFinish', () => {
      // this.BScroll.refresh()
      // console.log(this.$refs.scroll);
      // this.$refs.scroll && this.$refs.scroll.refresh();
      refresh()
    })
    //tabControl的监听
    // console.log(this.$refs.tabBar.$el.offsetTop);
    //应待tabBar上面的元素加载完之后
    this.$bus.$on('BannerLoad', () => {
      // console.log(this.$refs.tabBar.$el.offsetTop);
      this.offsetTop = this.$refs.tabBar.$el.offsetTop
    })
  },
  methods: {
    /*
    * 网络请求的函数
    * */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      this.goods[type].page++
      getHomeGoods(type, this.goods[type].page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
      })
    },
    /*
    * 事件监听函数
    * */
    GoodsIndexChange(index) {
      this.goodsIndex = index
      this.$refs.tabBar1.currentIndex = index
      this.$refs.tabBar.currentIndex = index

    },
    BackToTop() {
      //回到顶部
      this.$refs.scroll.scrollTo(0, 0)
    },
    BackTopShow(position) {
      this.IsBackTopShow = (-position.y) > 1000
      this.isShowTabBar = (-position.y) > this.offsetTop
    },
    LoadMore() {
      this.getHomeGoods(this.goodsType[this.goodsIndex])
      // console.log('加载更多');
      this.$refs.scroll.pullUpFinish();
    },
    /*
    * 防抖动函数
    * const refresh = this.debounce(this.$refs.scroll.refresh,200)
    *
    * refresh = function(...args){
    *   if (timer) ====timer= null====
    *   timer = setTimeout(()=>{
          func.apply(this.args)
        },delay)
    * }
    * */

  }

}
</script>

<style scoped>

#Home {
  /*position: relative;*/
  /*overflow: hidden;*/
  /**/
  height: 100vh;
  position: relative;
}

.home-banners {
  padding-top: 0;
}

.home-tab-bar {
  position: sticky;
  top: 44px;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.isShowTabBar {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}

</style>
