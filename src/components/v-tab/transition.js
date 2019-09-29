import Vue from 'vue'

const exportObj = {}

const regTransform = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/ig

if (!Vue.prototype.$isServer) {
  const cssPrefix = '-webkit-'
  const vendorPrefix = 'Webkit'
  const transformProperty = vendorPrefix + 'Transform'
  const transformStyleName = cssPrefix + 'transform'
  const transitionProperty = vendorPrefix + 'Transition'
  const transitionStyleName = cssPrefix + 'transition'
  const transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd'

  const getTranslate = (element) => {
    const result = { left: 0, top: 0 }
    if (element === null || element.style === null) return result

    const transform = element.style[transformProperty]
    const matches = regTransform.exec(transform)
    if (matches) {
      result.left = +matches[1]
      result.top = +matches[3]
    }

    return result
  }

  const translateElement = (element, x, y) => {
    if (x === null && y === null) return

    if (element === null || element === undefined || element.style === null) return

    if (!element.style[transformProperty] && x === 0 && y === 0) return

    if (x === null || y === null) {
      const translate = getTranslate(element)
      if (x === null) {
        x = translate.left
      }
      if (y === null) {
        y = translate.top
      }
    }

    cancelTranslateElement(element)
    element.style[transformProperty] += ' translate(' + (x ? (x + 'px') : '0px') + ',' + (y ? (y + 'px') : '0px') + ') translateZ(0px)'
  }

  const cancelTranslateElement = (element) => {
    if (element === null || element.style === null) return

    let transformValue = element.style[transformProperty]

    if (transformValue) {
      transformValue = transformValue.replace(regTransform, '')
      element.style[transformProperty] = transformValue
    }
  }

  Object.assign(exportObj, {
    transformProperty,
    transformStyleName,
    transitionProperty,
    transitionStyleName,
    transitionEndProperty,
    getElementTranslate: getTranslate,
    translateElement,
    cancelTranslateElement,
  })
}

export default exportObj
