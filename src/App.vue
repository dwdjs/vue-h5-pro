<template>
  <div
    id="app"
    :class="classes"
  >
    <van-nav-bar
      v-show="showHeader"
      class="dwd-nav-bar van-hairline--bottom"
      :title="title"
      :left-arrow="showBack"
      :border="false"
      @click-left="onBack"
      @click-right="onClickRight"
    />
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar
      v-show="showTabBar"
      v-model="curTabBar"
      class="dwd-tab-bar"
    >
      <van-tabbar-item name="index" replace to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="fire" to="/detail" icon="fire-o">精品推荐</van-tabbar-item>
      <van-tabbar-item name="cart" replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <!-- <van-tabbar-item name="sort" replace to="/sort" icon="apps-o">分类</van-tabbar-item> -->
      <van-tabbar-item name="profile" replace to="/profile" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem } from '@dwdjs/vant'

const tabbarPathArr = ['index', 'fire', 'cart', 'profile']

export default {
  components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  data() {
    return {
      title: '', // 不使用 computed，方便页面 set
      curTabBar: 'index',
      showBack: false,
      showTabBar: false,
      showHeader: false,
    }
  },
  computed: {
    classes() {
      // 有 header 和 tabbar 时，页面的高度要把这块显示区域保留
      return {
        'has-nav-bar': this.showHeader,
        'has-tab-bar': this.showTabBar,
      }
    },
  },
  watch: {
    ['$route']: function (val, oldVal) {
      this.watchRoute(val, oldVal)
    },
  },
  created() {
    this.watchRoute(this.$route)
  },
  methods: {
    onBack() {
      history.back()
    },
    onClickRight() {
      // history.back();
    },
    watchRoute(val, oldVal = {}) {
      const { name } = val
      this.curTabBar = val.name

      const { title } = val.meta
      this.title = title ? title.replace(/-/g, '') : ''
      this.showHeader = val.query.hide_header !== 1

      // TODO: 从外部进入费首页，先经过首页再进入目的页面，并处理 back 的情况
      // const blockList = tabbarPathArr;
      // this.showBack = !blockList.includes(name);

      let isShow
      // cart 特殊处理，如果不是 tabbar 页面进入的 cart，就不显示 tabbar
      if (name === 'cart' && oldVal.name) {
        isShow = ['index', 'fire', 'profile'].includes(oldVal.name)
      } else {
        isShow = tabbarPathArr.includes(name)
      }
      this.showTabBar = isShow
      this.showBack = !isShow
    },
  },
}
</script>

<style lang="less">
@import '~@/style/base';

body {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}

.dwd-nav-bar {
  height: 49px;
  line-height: 49px;
  position: fixed;
  z-index: 600;
  width: 100%;
  top: 0;
  left: 0;

  .van-nav-bar__title {
    font-size: 14px;
    text-transform: capitalize;
  }

  // .van-icon {
  //   color: @gray-dark;
  //   font-size: 24px;
  //   cursor: pointer;
  // }
}

.dwd-tab-bar {
  // TODO: 默认 tabbar 组件内联添加了 index: 1，是否应该移除
  z-index: 600 !important;
}
.has-nav-bar {
  padding-top: 50px;
}

// TIP: 购物车不是从 tab-bar 进入就不会显示 tabbar，也不是replace 形式进入
.has-tab-bar {
  padding-bottom: 50px;

  .fix-bottom-fixed {
    bottom: 50px;
  }
}
</style>
