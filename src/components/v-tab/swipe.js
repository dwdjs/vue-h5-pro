import Vue from 'vue'
import { debounce } from 'lodash'

let isSwiping = false

const supportTouch = !Vue.prototype.$isServer && 'ontouchstart' in window

// 整体流程
export default function swipe(element, options) {
  let moveFn = debounce((event) => {
    if (options.drag) {
      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  }, 10)

  const endFn = (event) => {
    if (!supportTouch) {
      document.removeEventListener('mousemove', moveFn)
      document.removeEventListener('mouseup', endFn)
    }

    isSwiping = false

    if (options.end) {
      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  }

  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
    if (isSwiping) return

    if (!supportTouch) {
      document.addEventListener('mousemove', moveFn)
      document.addEventListener('mouseup', endFn)
    }
    isSwiping = true

    if (options.start) {
      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
    }
  })

  if (supportTouch) {
    element.addEventListener('touchmove', moveFn)
    element.addEventListener('touchend', endFn)
    element.addEventListener('touchcancel', endFn)
  }
}
