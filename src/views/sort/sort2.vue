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
            :data-id="`pos_${item.id}`"
            :data-index="index"
            :class="{ active: index == current }"
            class="sort-nav-item"
          >{{ item.name }}</div>
        </div>
      </div>
      <div class="sort-content v-scroll">
        <div class="scroll-wrapper">
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
// 增强交互，参考饿了么点菜
import VSearch from '@/components/v-search'
import category from '@/mock/category.json'

const navList = category.data.list

export default {
  components: {
    VSearch,
  },

  data() {
    return {
      current: 0,
      navList,
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

  methods: {
    goNav(e) {
      const { index, id } = e.target.dataset

      this.current = index
      const target = this.$refs[id]

      // BUG: 移动端浏览器把 search-top 移出屏幕之外了，微信好的
      target && target[0].scrollIntoView({
        block: 'start',
        behavior: 'smooth', // 目前iOS 不支持 smooth
      })
      // console.log(this.navList[index])
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
