<template>
  <div>
    <div class="demo-block">
      <v-tab>
        <v-tab-item title="选项一">tab1</v-tab-item>
        <v-tab-item title="选项二">tab2</v-tab-item>
        <v-tab-item title="选项三">tab3</v-tab-item>
      </v-tab>
    </div>

    <div class="demo-block">
      <v-tab :tabs-max="5">
        <v-tab-item title="选项一">tab1</v-tab-item>
        <v-tab-item title="选项二">tab2</v-tab-item>
        <v-tab-item title="选项三">tab3</v-tab-item>
        <v-tab-item title="选项四">tab4</v-tab-item>
        <v-tab-item title="选项五">tab5</v-tab-item>
      </v-tab>
    </div>

    <div class="demo-block">
      <v-tab>
        <v-tab-item title="选项0">tab0</v-tab-item>
        <v-tab-item title="选项1">tab1</v-tab-item>
        <v-tab-item title="选项2">tab2</v-tab-item>
        <v-tab-item title="选项3">tab3</v-tab-item>
        <v-tab-item title="选项4">tab4</v-tab-item>
        <v-tab-item title="选项5">tab5</v-tab-item>
        <v-tab-item title="选项6">tab6</v-tab-item>
        <v-tab-item title="选项7">tab7</v-tab-item>
        <v-tab-item title="选项8">tab8</v-tab-item>
        <v-tab-item title="选项9">tab9</v-tab-item>
      </v-tab>
    </div>
  </div>
</template>

<script>
import VTab from '@/components/v-tab/tab'
import VTabItem from '@/components/v-tab/tab-item'

export default {
  components: {
    [VTab.name]: VTab,
    [VTabItem.name]: VTabItem,
  },
}
</script>

<style scoped>
.demo-block {
  margin: 10px 0;
}

</style>
