<template>
  <div id="paramsInfo">
    <table v-if="dParamsInfo.info" class="info-table" cellspacing="0">
      <thead>
      <tr>
        <th colspan="2">{{ dParamsInfo.info.key }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dParamsInfo.info.set" class="info-tr">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
      </tbody>
    </table>

    <table v-if="dParamsInfo.rule" cellspacing="0" class="rule-table">
      <thead>
      <tr>
        <th colspan="6">{{ dParamsInfo.rule.key }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in sizeParams">
        <td v-for="(item1,index) in item">{{ item1 }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <th colspan="6">{{dParamsInfo.rule.disclaimer}}</th>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "paramsInfo",
  props: {
    dParamsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      sizeParams: [],
    }
  },
  watch: {
    dParamsInfo() {
      for (let i = 0; i < this.dParamsInfo.rule.tables.length; i++) {
        this.sizeParams.push(...this.dParamsInfo.rule.tables[i])
      }
    }
  }
}
</script>

<style scoped>
table, thead, tbody, tr, th, td {
  border: 1px solid var(--color-low-text);
  text-align: center;
  padding: 10px;
}

table {

  width: 90%;
  margin: 10px auto;
}
.rule-table {
  margin: 20px auto 0;
}
.info-tr td:nth-of-type(1){
  width: 70px;
}
.info-tr td:nth-of-type(2){
  color: var(--color-high-text);
}

</style>