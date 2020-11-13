import {request} from "@/network/request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
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
  constructor(detailInfo) {
    this.desc = detailInfo.desc
    this.detailImage = detailInfo.detailImage
  }
}