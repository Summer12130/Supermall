<template>

  <div class="wrapper" ref="wrapper">
    <div class="content">
      <!--后期维护插槽需要根据传入的尺寸设置-->
      <slot></slot>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
// import BScroll from '@better-scroll/core'

export default {
  name: "BScroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullingUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      scroll: null,

    }
  },
  mounted() {
    //挂载后将BScroll挂载在数据中的scroll 避免垃圾回收时回收
    // this.scroll = new BetterScroll(this.$refs.Wrapper,{
    //     probeType:3
    // })
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollbar: true,
      // wheel: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullingUpLoad
    })

    //监听滚动事件
    this.scroll.on('scroll', (position) => {
      // console.log(position);
      this.$emit('BackTopShow', position)
    })
    //上拉加载更多
    this.scroll.on('pullingUp',() => {

      this.$emit('LoadMore')


    })

  },
  methods: {
    refresh() {
      // console.log('---');
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    pullUpFinish(){
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll.y
    }
  }
}
</script>

<style scoped>


</style>