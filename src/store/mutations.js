export default {
  productNumberChange(state,payload){
    payload.count++
  },
  productAddToCart(state,payload){
    state.productList.push(payload)
  }
}