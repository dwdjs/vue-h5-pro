// import { isServer } from './index'

const isServer = false

// [debounce 和 throttle](https://www.cnblogs.com/wilber2013/p/5893426.html)

// const docE = document.documentElement
// const docBody = document.body

/**
 * 触发高度
 * 文档总高度 - (滚动条距离顶部高度 + 当前可视的页面高度) < 触发高度
 * scrollHeight - (scrollTop + visibleHeight|clientHeight) < offset
 *
 */
export default {
  /**
   * const pos = getPageScrollPos()
   * const reachBottom = pos.pageHeight - (pos.top + pos.height)
   *
   * @returns object
   */
  // getPageScrollPos(a = docE, b = docBody) {
  //   const top = Math.max(a.scrollTop, b.scrollTop)
  //   const left = Math.max(a.scrollLeft, b.scrollLeft)
  //   const width = Math.min(a.clientWidth, b.clientWidth)
  //   const height = Math.min(a.clientHeight, b.clientHeight)
  //   const pageWidth = Math.max(a.scrollWidth, b.scrollWidth)
  //   const pageHeight = Math.max(a.scrollHeight, b.scrollHeight)

  //   return {
  //     top,
  //     left,
  //     height,
  //     width,
  //     pageWidth,
  //     pageHeight,
  //   }
  // },
  /* 找到最近的触发滚动事件的元素
   * @param {Element} element
   * @param {Element} rootElement
   * @return {Element | window}
   */
  getScrollEventTarget(element, rootParent = window) {
    let currentNode = element
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and
    // http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (
      currentNode &&
      currentNode.tagName !== 'HTML' &&
      currentNode.tagName !== 'BODY' &&
      currentNode.nodeType === 1 &&
      currentNode !== rootParent
    ) {
      const { overflowY } = this.getComputedStyle(currentNode)
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode
      }
      currentNode = currentNode.parentNode
    }
    return rootParent
  },

  // 判断元素是否被加入到页面节点内
  isAttached(element) {
    let currentNode = element.parentNode
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true
      }
      if (currentNode.nodeType === 11) {
        return false
      }
      currentNode = currentNode.parentNode
    }
    return false
  },

  // 获取滚动高度
  getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
  },

  // 设置滚动高度
  setScrollTop(element, value) {
    'scrollTop' in element ? (element.scrollTop = value) : element.scrollTo(element.scrollX, value)
  },

  // 获取元素距离顶部高度
  getElementTop(element) {
    return (
      (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window)
    )
  },

  getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height
  },

  getComputedStyle: !isServer && document.defaultView.getComputedStyle.bind(document.defaultView),
}
