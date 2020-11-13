<template>
  <div class="item-info">
    <p>{{ dItemInfo.title }}</p>
    <p>
      <span class="nowPrice">{{ dItemInfo.price }}</span>
      <span class="oldPrice"
            v-if="dItemInfo.oldPrice">{{ dItemInfo.oldPrice }}</span>
      <span class="discountType"
            :style="{backgroundColor:dItemInfo.discountBgColor}"
            v-if="dItemInfo.discountDesc">{{ dItemInfo.discountDesc }}</span>
    </p>
    <!-- 读取对象中的某个对象的属性值时，这个对象不存在，说通俗点就是三层表达式a.b.c，在对象a中没有对象b，
    那么读取对象a.b.c中的值，自然会报错。如果是两层表达式a.b则不会报错，返回的是undefined
    因此下面的先判断dItemInfo.columns是否存在 若存在在渲染 不存在就不渲染-->
    <ul v-if="dItemInfo.columns">
      <li>{{ dItemInfo.columns[0] }}</li>
      <li>{{ dItemInfo.columns[1] }}</li>
      <li>{{ dItemInfo.deliveryTime }}小时发货</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ItemInfo",
  props: {
    dItemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.item-info {
  padding: 10px 30px;
  font-size: var(--font-size);
}

.item-info p {
  font-size: 18px;
  font-weight: 500;
}

/*价格项样式*/
.item-info p:nth-of-type(2) {
  margin: 8px auto;
}

.nowPrice {
  font-size: 21px;
  color: var(--color-high-text);
}

.oldPrice {
  color: var(--color-low-text);
  padding: 0 5px;
  font-size: 14px;
  text-decoration: line-through;
}

.discountType {
  border-radius: 10px;
  padding: 2px 8px;
  color: #eee;

}

.item-info ul {
  display: flex;
  list-style: none;
}

.item-info ul li {
  flex: 1;
  color: var(--color-low-text);
  text-align: center;
}

</style>