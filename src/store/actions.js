import el from "element-ui/src/locale/lang/el";

export default {
  addToCart(context,payload){
    // console.log(payload);
    let oldProduct = null
    oldProduct = context.state.productList.find(item => item.iid === payload.iid)
    if (oldProduct){
      //找到了相同的商品
      context.commit('productNumberChange',oldProduct)
    }else {
      //没找到
      context.commit('productAddToCart',payload)
    }
  }
}