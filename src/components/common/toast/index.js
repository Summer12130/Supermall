import Toast from "@/components/common/toast/Toast";

const obj = {}


obj.install = function (Vue) {
  //创建组件构造器
  const constructor = Vue.extend(Toast)
  //new的方式,根据组件构造器,可以创建一个组件
  const toast = new constructor()
  //将toast挂载到一个节点元素上
  toast.$mount(document.createElement('div'))
  //将toast根元素(div)添加到document
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}

export default obj
