export default {
  getCartList(state){
    return state.productList
  },
  getCartListLength(state){
    return state.productList.length
  }
}