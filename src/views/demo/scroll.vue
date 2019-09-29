<template>
  <div ref="wrapper" class="scroll-wrapper">
    <ul class="content">
      <li v-for="(item, index) in list" :key="item.biz_id + index" class="item">{{ item.title }}</li>
    </ul>
    <div class="loading-wrapper">xx</div>
  </div>
</template>

<script>
// scroll
import BScroll from 'better-scroll'
import list from '@/mock/sku-list'

function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(list)
    }, 500)
  })
}

export default {
  data() {
    return {
      list,
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      requestData().then(data => {
        this.list = this.list.concat(data)
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.wrapper, {})
            this.scroll.on('touchend', pos => {
              // 下拉动作
              console.log(111)
              if (pos.y > 50) {
                this.loadData()
              }
            })
          } else {
            this.scroll.refresh()
          }
        })
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.item {
  height: 100px;
}
</style>
