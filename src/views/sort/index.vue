<template>
  <div class="page-sort">
    <div class="search-top van-hairline--bottom">
      <v-search bg="red" />
    </div>
    <div class="sort-wrapper flex">
      <div class="sort-nav v-scroll">
        <div class="scroll-wrapper" @click="goNav($event)">
          <div
            v-for="(item, index) in navList"
            :key="item.id"
            :data-index="index"
            :class="{ active: index == current }"
            class="sort-nav-item"
          >{{ item.name }}</div>
        </div>
      </div>
      <div ref="wrapper" class="sort-content v-scroll">
        <div class="scroll-wrapper">
          <div class="sort-banner">
            <img class="auto" :src="banner" alt="banner">
          </div>
          <section class="sort-item-group">
            <div
              v-for="(sub, idx1) in contentList"
              :key="sub.id"
              :data-index="`${current}.${idx1}`"
              class="sort-item"
            >
              <div class="sort-sub-group-header">
                <div class="title" :data-index="`${current}.${idx1}`" data-link="xxx" @click="goNext($event)">{{ sub.name }}</div>
                <div v-if="sub.more" class="more">{{ sub.more }}</div>
              </div>
              <div class="sort-sub-group">
                <div
                  v-for="(it, idx2) in sub.subCategories"
                  :key="it.id"
                  :data-index="`${current}.${idx1}.${idx2}`"
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
// 简单实现，无交互
// 选中后，右侧显示对应数据，默认滚动到顶部，如已访问，滚动到上次访问的位置
// TODO: 如果当前组件被 keep-alive 缓存，那么无法离开当前页面仅仅会触发 deactivated，此时元素已经隐藏，无法取到滚动高度
// 只能滚动时加事件记录位置，返回时重置位置
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
      scrollBehavior: true,
      current: 0,
      navList,
      contentList: navList[0].subCategories,
      banner: 'https://placekitten.com/600/200',
    }
  },

  computed: {
    // navClass() {
    //   return {
    //     active:
    //   }
    // },
  },

  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    this.tempPos = {}

    console.log(this.$options.name)
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    this.setPos()
    console.log('activated')
  },
  deactivated() {
    this.savePos()
    console.log('deactivated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },

  methods: {
    savePos() {
      if (this.scrollBehavior) {
        const target = this.$refs.wrapper
        const preData = this.navList[this.current]
        this.tempPos[preData.id] = target.scrollTop
      }
      console.log(this.tempPos)
    },

    setPos() {
      let posTop = 0
      const target = this.$refs.wrapper

      if (this.scrollBehavior) {
        const curData = this.navList[this.current]
        posTop = this.tempPos[curData.id] || 0
      }
      this.$nextTick(() => {
        target.scrollTo(0, posTop)
      })
    },

    goNav(e) {
      const { index } = e.target.dataset

      // 先记录当前滚动位置，之后跳转到新选中项应在位置
      this.savePos()

      this.current = index
      this.contentList = this.navList[index].subCategories

      this.setPos()
    },
    goNext(e) {
      const { index, link } = e.currentTarget.dataset

      console.log(index, link)
    },
  },
}
</script>

<style lang="stylus" scoped>
.page-sort {
  background: #fff;
}
.search-top {
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
