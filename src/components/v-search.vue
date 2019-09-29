<template>
  <div class="search-entry" :style="styles">
    <div class="search-fake" @click="goNext">
      <div class="input-fake">focus jump</div>
      <button>search</button>
    </div>
  </div>
</template>

<script>
// 搜索入口，点击弹出搜索页
// 聚焦或有内容时显示搜索按钮，有内容时出现 clear 按钮
// 搜索页引入 search-bar 组件实现
export default {
  name: 'VSearch',

  props: {
    bg: String,
  },

  computed: {
    styles() {
      const { bg } = this.$props
      return {
        backgroundColor: bg,
      }
    },
  },

  methods: {
    goNext() {
      this.$popup('search')
    },
  },
}
</script>

<style lang="stylus" scoped>
.search-entry {
  height: 48px;
  padding: 4px 10px;
}
.search-fake {
  display: flex;
  align-items: center;
}
</style>
