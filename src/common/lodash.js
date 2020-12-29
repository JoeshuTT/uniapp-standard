// Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。
/**
 * 补零
 * @param {Number} n
 */
export const padZero = function (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 函数节流
 * @param {*} fn 事件回调
 * @param {*} interval 时间间隔的阈值
 */
export const throttle = function (fn, interval) {
  let last = 0
  return function () {
    const context = this
    const args = arguments
    const now = +new Date()

    if (now - last >= interval) {
      last = now
      fn.apply(context, args)
    }
  }
}

/**
 * 函数防抖
 * @param {callback} fn 事件回调
 * @param {number} delay 每次推迟执行的等待时间
 */
export const debounce = function (fn, delay) {
  let last = 0
  let timer = null
  return function () {
    const context = this
    const args = arguments
    const now = +new Date()

    if (now - last < delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, delay)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

/**
 * 浅拷贝
 * @param {Object} source
 */
export function shallowClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'shallowClone')
  }
  return Object.assign({}, source)
}

/**
 * 深拷贝
 * @param {Object} source
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
