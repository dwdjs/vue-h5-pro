
export let supportsPassive = false

try {
  const opts = {}
  Object.defineProperty(opts, 'passive', {
    get() {
      supportsPassive = true
    },
  })
  window.addEventListener('test-passive', null, opts)
} catch (e) {
  // do nothing
}

// 移动端Web界面滚动性能优化: Passive event listeners
// https://blog.csdn.net/shenlei19911210/article/details/70198771
// passive 设置为true时，表示 listener 永远不会调用 preventDefault() 来优化性能
export function on(target, event, handler, passive = false) {
  target.addEventListener(event, handler, supportsPassive ? { capture: false, passive } : false)
}

export function off(target, event, handler) {
  target.removeEventListener(event, handler)
}
