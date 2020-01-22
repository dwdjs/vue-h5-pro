<template>
  <div :class="[`v-tab--${type}`]" class="v-tab">
    <div v-if="type === 'line' && tabs.length > tabsMax" class="v-tab__nav-wrap">
      <div ref="swipe" class="v-tab__swipe">
        <div class="v-tab__nav v-tab__nav--line">
          <div :style="navBarStyle" class="v-tab__nav-bar" />
          <div
            ref="tabkey"
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ 'v-tab--active': index === curActive }"
            @click="handleTabClick(index)"
            class="v-tab v-hairline"
          >
            {{ tab.title }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      :class="[`v-tab__nav--${type}`]"
      class="v-tab__nav"
    >
      <div v-if="type === 'line'" :style="navBarStyle" class="v-tab__nav-bar" />
      <div
        ref="tabkey"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'v-tab--active': index === curActive }"
        @click="handleTabClick(index)"
        class="v-tab v-hairline"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="v-tab__content">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * Abc 名称
 * @module packages/Abc
 * @desc 描述
 * @rules
 *   - 使用规则
 * @param {string} [type] - 显示类型
 *
 * @example
 * <Abc>xxx</Abc>
 */
import VTabItem from './tab-item'
import swipe from './swipe'
import translateUtil from './transition'

export default {
  name: 'v-tab',

  components: {
    [VTabItem.name]: VTabItem,
  },

  props: {
    prefixCls: {
      type: String,
      default: 'v-',
    },
    duration: { // 切换tab的动画时间，单位毫秒
      type: Number,
      default: 300,
    },
    tabsMax: { // 最大展示 tab 个数
      type: Number,
      default: 5,
    },
    type: {
      type: String,
      default: 'line',
      validator(value) { // 是默认的line还是card
        // 划线、胶囊
        return ['line', 'card'].includes(value)
      },
    },
    active: { // 外部传入的激活的tab标签
      type: [String, Number],
      default: 0,
    },
  },

  data() {
    return {
      tabs: [],
      isReady: false,
      curActive: +this.active,
      isSwiping: false,
    }
  },

  computed: {
    /**
     * `type`为`line`时，tab下方的横线的样式
     */
    navBarStyle() {
      if (!this.isReady || this.type !== 'line' || !this.$refs.tabkey) return

      // const tabKey = this.curActive
      // const elem = this.$refs.tabkey[tabKey]
      // const { length } = this.tabs.length
      // const offsetWidth = `33.3%`
      // const offsetLeft = `${elem.offsetLeft || 0}px`
      console.log('this.curActive', this.curActive)
      const { length } = this.tabs
      const offsetWidth = length > this.tabsMax ? '22%' : `${(100 / this.tabs.length)}%`

      return {
        width: offsetWidth,
        transform: `translate3d(${100 * this.curActive}%, 0, 0)`,
        transitionDuration: `${this.duration}ms`,
      }
    },
    swipeWidth() {
      return this.$refs.swipe && this.$refs.swipe.getBoundingClientRect().width
    },
    maxTranslate() {
      /* istanbul ignore if */
      if (!this.$refs.tabkey) return

      const length = this.tabs.length - 1
      const lastTab = this.$refs.tabkey[length]
      const lastTabWidth = lastTab.offsetWidth
      const lastTabOffsetLeft = lastTab.offsetLeft

      return (lastTabOffsetLeft + lastTabWidth) - this.swipeWidth
    },
  },


  watch: {
    active(val) {
      this.curActive = +val
    },

    curActive() {
      /* istanbul ignore else */
      if (this.tabs.length > this.tabsMax) {
        this.doOnValueChange()
      }
    },
  },

  mounted() {
    // 页面载入完成
    this.$nextTick(() => {
      // 可以开始触发在computed中关于nav-bar的css动画
      this.isReady = true
      this.initEvents()

      if (this.tabs.length > this.tabsMax) {
        this.doOnValueChange()
      }
    })
  },

  methods: {
    handleTabClick(index) {
      if (this.tabs[index].disabled) {
        this.$emit('disabled', index)
        return
      }

      this.$emit('click', index)
      this.curActive = index
    },

    // 将当前value值转换为需要translate的值
    value2Translate(value) {
      if (!this.$refs.tabkey) return 0

      const tab = this.$refs.tabkey[value]
      const { maxTranslate } = this
      const tabWidth = tab.offsetWidth
      const tabOffsetLeft = tab.offsetLeft
      /* eslint no-mixed-operators: 0 */
      let translate = tabOffsetLeft + (tabWidth * 2.7) - this.swipeWidth
      if (translate < 0) {
        translate = 0
      }

      return -1 * (translate > maxTranslate ? maxTranslate : translate)
    },

    initEvents() {
      const el = this.$refs.swipe
      if (!el) return

      let swipeState = {}

      swipe(el, {
        start: (event) => {
          swipeState = {
            start: new Date(),
            startLeft: event.pageX,
            startTranslateLeft: translateUtil.getElementTranslate(el).left,
          }
        },

        drag: event => {
          // 这里拖动的时候有点卡顿，没 jd 的效果流畅，下面的 console 输出有中断
          // 上面问题原因是 debounce 设置延时的时间 16ms 有点长了，改为 10，流畅了一点 但跟随鼠标还是慢了一点
          this.isSwiping = true
          console.log(111)

          swipeState.left = event.pageX
          const deltaX = swipeState.left - swipeState.startLeft
          const translate = swipeState.startTranslateLeft + deltaX

          /* istanbul ignore else */
          if (translate > 0 || (translate * -1) > this.maxTranslate) return

          translateUtil.translateElement(el, translate, null)
        },

        end: () => {
          this.isSwiping = false
        },
      })
    },

    doOnValueChange() {
      const value = +this.curActive
      translateUtil.translateElement(this.$refs.swipe, this.value2Translate(value), null)
    },
  },
}
</script>

<style lang="stylus">
@import '~@/style/var';

.v-tab {
  position: relative;

  &__nav-wrap {
    overflow: hidden;
  }

  &__swipe {
    user-select: none;
    transition: transform linear .2s;

    .v-tab {
      flex: 0 0 22%;
    }

    .v-tab__nav {
      overflow: visible;
    }
  }

  &__nav {
    overflow: hidden;
    transition: transform .5s cubic-bezier(.645, .045, .355, 1);
    position: relative;
    display: flex;

    &--line {
      height: 44px;

      .v-tab {
        &::after {
          border-width: 1px 0;
        }
      }
    }

    &--card {
      height: 28px;
      margin: 0 15px;
      background-color: #fff;
      border-radius: 2px;
      border: 1px solid #222;
      overflow: hidden;

      .v-tab {
        color: #222;
        line-height: 28px;
        border-right: 1px solid #222;

        &:last-child {
          border-right: none;
        }

        &.v-tab--active {
          background-color: #222;
          color: #fff;
        }
      }
    }
  }

  &__nav-bar {
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background-color: #f13e3a;
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    transform-origin: 0 0;
  }
}

.v-tab {
  position: relative;
  color: #666;
  // color: $text-color;
  background-color: #fff;
  font-size: 14px;
  line-height: 44px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  flex: 1;

  &--active {
    color: red;
  }

  &__pane {
    display: none;

    &--select {
      display: block;
    }
  }
}

</style>
