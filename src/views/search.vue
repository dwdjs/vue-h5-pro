<template>
  <div class="page-search">
    <v-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </v-search>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>

    <v-icon type="search" />

    <div v-if="historyList.length" class="search-history">
      <div class="title">搜索历史</div>
      <div class="content">
        <span v-for="(item, index) in historyList" :key="item.id" @click="goNext(index)">
          {{ item.value }}
        </span>
      </div>
      <div class="more"><span class="xxx">更多/收起搜索历史</span></div>
    </div>

    <div v-if="keysList.length" class="search-keys">
      <div class="title">热门推荐</div>
      <div class="content">
        <span v-for="(item, index) in keysList" :key="item.id" @click="goNext(index)">
          {{ item.value }}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
// 搜索展示为弹出，覆盖页面之上
// 关键词支持新开链接，视觉效果参见京东
import VSearch from '@/components/v-search'
import VIcon from '@/components/v-icon'
import { Search } from '@dwdjs/vant'

export default {
  name: 'Search',

  components: {
    [Search.name]: Search,
    [VIcon.name]: VIcon,
    [VSearch.name]: VSearch,
  },

  data() {
    return {
      value: '',
      keysList: [],
      historyList: [],
    }
  },

  methods: {
    onSearch() {},
    goNext(e) {
      console.log(e)
    },
  },
}
</script>
