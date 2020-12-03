import {request} from "@/network/request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}

export class itemInfo {
  constructor(itemInfo, columns, extra) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.deliveryTime = extra.deliveryTime
    this.realPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.desc
  }
}

export class shopInfo {
  constructor(shopInfo) {
    this.allGoodsUrl = shopInfo.allGoodsUrl
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.score = shopInfo.score
    this.services = shopInfo.services
  }
}

export class detailInfo {
  constructor(detailInfo, Key, Image) {
    this.desc = detailInfo.desc
    this.key = Key
    this.detailImage = Image
  }
}

export class paramInfo {
  constructor(itemParams) {
    this.info = itemParams.info
    this.rule = itemParams.rule
  }
}

export class remarkInfo {
  constructor(rate) {
    this.list = rate.list
  }
}

