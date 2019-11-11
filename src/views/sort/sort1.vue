<template>
  <div class="page-sort">
    <div ref="search" class="top-search van-hairline--bottom">
      <v-search bg="red" />
    </div>
    <div class="sort-wrapper flex">
      <div class="sort-nav v-scroll">
        <div class="scroll-wrapper" @click="goNav($event)">
          <div
            v-for="(item, index) in navList"
            :key="item.id"
            :data-id="`pos_${item.id}`"
            :data-index="index"
            :class="{ active: index == current }"
            class="sort-nav-item"
          >{{ item.name }}</div>
        </div>
      </div>
      <div ref="wrapper" class="sort-content v-scroll">
        <div class="scroll-wrapper" :style="`paddingBottom: ${padBottom}px`">
          <div class="sort-banner">
            <img class="auto" :src="banner" alt="banner">
          </div>
          <section
            v-for="(item, index) in navList"
            :key="item.id"
            :ref="`pos_${item.id}`"
            :data-index="index"
            class="sort-item-group"
          >
            <div
              v-for="(sub, idx1) in item.subCategories"
              :key="sub.id"
              :data-index="`${index}.${idx1}`"
              class="sort-item"
            >
              <div class="sort-sub-group-header">
                <div class="title" :data-index="`${index}.${idx1}`" data-link="xxx" @click="goNext($event)">{{ sub.name }}</div>
                <div v-if="sub.more" class="more">{{ sub.more }}</div>
              </div>
              <div class="sort-sub-group">
                <div
                  v-for="(it, idx2) in sub.subCategories"
                  :key="it.id"
                  :data-index="`${index}.${idx1}.${idx2}`"
                  data-link="search-result"
                  class="sort-sub"
                  @click="goNext($event)"
                >
                  <img :src="it.thumbnail" alt="it.name" class="sort-sub-img">
                  <p class="sort-sub-text">{{ it.name }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 简单交互，使用 Element.scrollIntoView 无动画
// BUG: 移动端浏览器点击做锚点定位时，把 top-search 移出可视区域了（微信没问题）
// - 最后一个分类填充空白，可点选定位
// - 优化索引位置计算，理想应该二分法
// TODO: 目前不支持左侧菜单超出一屏时，自使用选中项滚动到显示区域
// 交互增强，可使用 css3 全模拟滚动，自适应选择项滚动到显示区域 效果可参考饿了么点菜
import { debounce } from 'lodash'
import { on, off } from '@/utils/event'
import { getScrollTop } from '@/utils/dom'
// import { posIndex } from '@/utils/utils'
import { posIndex2 as posIndex } from '@/utils/utils'
import VSearch from '@/components/v-search'
import category from '@/mock/category.json'

const navList = category.data.list

export default {
  name: 'sort',

  components: {
    VSearch,
  },

  data() {
    return {
      current: 0,
      navList,
      banner: 'https://placekitten.com/600/200',
      padBottom: 0,
      scrollBehavior: true,
    }
  },

  created() {
    this._onScroll = debounce(this.onScroll, 16)
  },

  mounted() {
    this.scroller = this.$refs.wrapper // scroll.getScrollEventTarget(this.$el)

    this.handler(true)

    // 记录各区块位置
    this.$nextTick(() => {
      const { wrapper, search, ...rest } = this.$refs

      const searchHeight = Math.round(search.getBoundingClientRect().height)
      const wrapperHeight = Math.round(wrapper.getBoundingClientRect().height)
      const tempArr = Object.keys(rest)
      const restLastIndex = tempArr.length - 1
      this.posArr = tempArr.map((key, index) => {
        const el = this.$refs[key]
        const elRect = el[0] && el[0].getBoundingClientRect()
        if (index === restLastIndex) {
          this.padBottom = wrapperHeight - Math.round(elRect.height)
        }
        return Math.round(elRect.top) - searchHeight
      })
    })
    if (this.immediateCheck) {
      this.$nextTick(this._onScroll)
    }
  },

  destroyed() {
    this.handler(false)
  },

  activated() {
    this.setPos()
    this.handler(true)
  },

  deactivated() {
    this.handler(false)
  },

  methods: {
    setPos() {
      let posTop = this.tempPos || 0
      this.$nextTick(() => {
        this.scroller.scrollTo(0, posTop)
      })
    },
    goNav(e) {
      const { index, id } = e.target.dataset

      this.current = index
      const target = this.$refs[id]

      // BUG: 移动端浏览器 scrollIntoView 把 search-top 移出屏幕之外了，微信好的
      this.handler(false) // 选择定位锚点滚动时不必监听(会多次绑定)
      target && target[0].scrollIntoView({
        block: 'start',
        // behavior: 'smooth', // 目前iOS 不支持 smooth
      })
      setTimeout(() => {
        this.handler(true)
      }, 0)
    },
    goNext(e) {
      const { index, link } = e.currentTarget.dataset

      this.$forward('detail', { index })
      console.log(index, link)
    },
    onScroll(e) {
      // 侦测滚动位置 是否在某分类区域内
      // 创建时先存储各位置，判断在哪个区间
      this.tempPos = getScrollTop(this.scroller)
      this.current = posIndex(this.posArr, this.tempPos)
      // console.log(this.tempPos, this.current)
    },
    handler(bind) {
      if (this.binded !== bind) {
        this.binded = bind;
        // 1 浏览器对 window以及div 对象 的scroll事件全兼容
        // 2 scroll事件需要侦听对象存在滚动条，this.scroller 如果没有滚动条则不存在其对应的scroll事件触发
        // 这里必须将
        (bind ? on : off)(this.scroller, 'scroll', this._onScroll)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.page-sort {
  background: #fff;
}
.top-search {
  height: 49px;
}

.sort-wrapper {
  position: absolute;
  top: 48px;
  bottom: 0;
  width: 100%;
}
.sort-nav {
  height: 100%;
  width: 90px;
  overflow-y: auto;
  background: #f6f6f6;
  padding-right: 1px;
}
.sort-content {
  height: 100%;
  overflow-y: auto;
  flex: 1;
}
.scroll-wrapper {
  // overflow-x: hidden;
  // overflow-y: auto;
}
.sort-content-box {
  padding-bottom: 100px;
}
.sort-nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 10px;
  font-size: 14px;
  position: relative;
  // color: #484848;
  // 默认微软雅黑
  // 选择黑体

  &.active {
    background: #fff;
    font-weight: 400;
    // color: #2d2d2d;
    color: red;

    &:before {
      content: ' ';
      position: absolute;
      left: 0;
      display: inline-block;
      width: 3px;
      height: 13px;
      background: #f1260f;
    }
  }
}

// sort-content > (sort-item-group > sort-item) > (sort-sub-group > sort-sub)
.sort-banner {
  margin: 10px;
  overflow: hidden;
  border-radius: 3px;
}

.sort-item {
  padding: 10px;
}

.sort-sub-group {
  display: flex;
  flex-flow: row wrap;
  margin: 10px 0 10px;
}
.sort-sub-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}
.sort-sub {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 84px;
}
.sort-sub-img {
  width: 48px;
  height: 48px;
}
.sort-sub-text {
  font-size: 12px;
}

</style>
