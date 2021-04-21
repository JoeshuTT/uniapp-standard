import { isDef, isNumeric } from './validate'

/**
 * 补零
 * @param {Number} n
 * @returns {String}
 */
const padZero = function (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 获取系统信息
 * @returns {Object}
 */
export const getSystemInfoSync = function () {
  return uni.getSystemInfoSync()
}

/**
 * uni 同步版本 storage 封装，异步直接使用 api 不用 try{}catch(){}
 */
const storageSync = {
  set(key, value) {
    try {
      uni.setStorageSync(key, value)
    } catch (e) {
      // error
    }
  },
  get(key, def = null) {
    try {
      const value = uni.getStorageSync(key)
      return value || def
    } catch (e) {
      // error
      return def
    }
  },
  remove(key) {
    try {
      uni.removeStorageSync(key)
    } catch (e) {
      // error
    }
  },
  clear() {
    try {
      uni.clearStorageSync()
    } catch (e) {
      // error
    }
  },
}

/**
 * 获取上一个页面实例 $vm
 * @param {Number} delta 页面层数
 * @description 可用于修改上一页数据
 */
const getPrevPage = function (delta = 1) {
  const pages = getCurrentPages()
  if (delta > pages.length) {
    // 页面层数大于现有页面数
    return null
  }

  const prevPage = pages[pages.length - (delta + 1)]
  if (prevPage) {
    return prevPage.$vm
  }

  return null
}

/**
 * 获取当前页面路径
 * @description 可用于修改上一页数据
 * @returns {String}
 */
const getCurrentRoute = function () {
  const pages = getCurrentPages()
  if (pages.length > 0) {
    const currentPage = pages[pages.length - 1]
    return currentPage.route
  }
  return '/'
}

/**
 * API Promise化
 * @param {Function} func 可用的uniapp的API函数名
 * @example
 * promisify(wx.getSystemInfo)().then(console.log)
 */
const promisify = function (func) {
  if (typeof func !== 'function') {
    throw new Error('error arguments', 'promisify')
  }
  return (args = {}) =>
    new Promise((resolve, reject) => {
      func(
        Object.assign(args, {
          success: resolve,
          fail: reject,
        }),
      )
    })
}

/**
 * addUnit
 * @param {String|Number} value
 * @returns {String}
 */
const addUnit = function (value) {
  if (!isDef(value)) {
    return undefined
  }

  value = String(value)
  return isNumeric(value) ? `${value}px` : value
}

/**
 * rpx2px
 * @param {Number} val
 * @param {Number} destWidth
 * @returns {Number}
 */

const rpx2px = function (val, destWidth = 750) {
  const systemInfo = uni.getSystemInfoSync()
  const scale = systemInfo.windowWidth / destWidth

  return Math.round(val * scale)
}

/**
 * 将一个参数对象格式化为一个url参数，编码
 * @description 可用于页面跳转携带多个参数，携带中文参数的情况
 * @param {Object} query 参数对象
 * @returns {String}
 */
const qsStringify = function (query) {
  if (!query && typeof query !== 'object') {
    throw new Error('error arguments', 'qsStringify')
  }
  const url = Object.keys(query)
    .map(key => key + '=' + encodeURIComponent(query[key]))
    .join('&')
  return url
}

/**
 * 对一个已编码的参数对象, 解码
 * @description 可用于页面跳转携带多个参数，携带中文参数的情况
 * @param {Object} query 参数对象
 * @returns {Object}
 */

const qsDecode = function (query) {
  if (!query && typeof query !== 'object') {
    throw new Error('error arguments', 'qsDecode')
  }
  const target = {}
  Object.keys(query).forEach(key => {
    target[key] = decodeURIComponent(query[key])
  })
  return target
}

export default {
  padZero,
  getSystemInfoSync,
  storageSync,
  getPrevPage,
  getCurrentRoute,
  promisify,
  addUnit,
  rpx2px,
  qsStringify,
  qsDecode,
}
