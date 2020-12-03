<template>
  <div class="toast-aria" v-show="this.isShow">
    <p class="toast-text">{{ this.message }}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message = '请输入文字', duration = 2000) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.message = ''
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>

.toast-aria {
  /*居中显示*/
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(80, 80, 80, .8);

  z-index: 99;
}

.toast-text {
  color: #eee;
  padding: 5px;
  font-size: 18px;
}
</style>