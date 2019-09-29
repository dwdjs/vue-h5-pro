<template>
  <div class="page-index">
    <index-first />

    <div class="tab-wrapper">
      <div>tabs 精选 xx活动 各分类</div>
      <!-- <v-tab :tabs="tabs" /> -->
    </div>
  </div>
</template>

<script>
// 顶部首屏逻辑 banner 分类 秒杀/活动
// 底部 tab 切换列表，支持吸顶+滑动切换
// 支持滚动加载、配置 url 链接
// 支持背部镂空广告
import VTab from '@/components/v-tab/tab'
import VTabItem from '@/components/v-tab/tab-item'
import IndexFirst from './first'

export default {
  components: {
    [IndexFirst.name]: IndexFirst,
    [VTab.name]: VTab,
    [VTabItem.name]: VTabItem,
  },

  data() {
    return {
      tabs: [],
    }
  },
}
</script>

<style lang="stylus" scoped>
.demo {
  &-group {
    margin-bottom: 15px;
  }
}
</style>
