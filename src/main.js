import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入element-ui及样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入fastclick
import FastClick from 'fastclick'
//导入toast
import toast from 'components/common/toast'
//导入lazyload
import VueLazyload from "vue-lazyload";
Vue.use(toast)
Vue.use(VueLazyload,{
  preload:1.3,
  loading:'assets/images/common/loading.gif'
})
Vue.use(ElementUI)
FastClick.attach(document.body)


//创建事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
