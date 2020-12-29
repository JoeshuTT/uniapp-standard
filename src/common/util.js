// 工具类
import { isDef, isNumeric } from './validate'
/**
 * 补零
 * @param {Number} n
 */
const padZero = function(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/**
 * getSystemInfoSync
 * @return {Object}
 */
export const getSystemInfoSync = function() {
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
    get(key, def) {
        try {
            const value = uni.getStorageSync(key)
            return value || null || def
        } catch (e) {
            // error
            return null || def
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
    }

}

/**
 * 获取上一个页面实例 $vm
 * @param {Number} delta 页面层数
 * @description 可用于修改上一页数据
 */
const getPrevPage = function(delta = 1) {
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
 * API Promise化
 * @description 扩展uni-app API支持promise
 * @example promisify(wx.getSystemInfo)().then(console.log)
 */
const promisify = function(func) {
    if (typeof func !== 'function') {
        throw new Error('error arguments', 'promisify')
    }
    return (args = {}) =>
        new Promise((resolve, reject) => {
            func(
                Object.assign(args, {
                    success: resolve,
                    fail: reject
                })
            )
        })
}

/**
 * addUnit
 * @param {Number|String} val
 * @param {Number} destWidth
 */
const addUnit = function(value) {
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
 */
let systemInfo = null
const rpx2px = function(val, destWidth = 750) {
    if (systemInfo == null) {
        systemInfo = uni.getSystemInfoSync()
    }
    const scale = systemInfo.windowWidth / destWidth

    return Math.round(val * scale)
}

/**
 * 页面(url)传参字符串进行编码,解码
 * @param {Object} query
 * @description 页面跳转,可使用,尤其是携带中文参数时
 */
const qsStringify = function(query) {
    if (!query && typeof query !== 'object') {
        throw new Error('error arguments', 'qsStringify')
    }
    const url = Object.keys(query).map(key => key + '=' + encodeURIComponent(query[key])).join('&')
    return url
}

/**
 * 查询指定节点的布局位置信息，其功能类似于 DOM 的 getBoundingClientRect
 * @param {Boolean} context 选择器范围，页面中是一般是使用this
 * @param {String} selector .a, #a
 * @param {Boolean} all
 */
const getRect = function(context, selector, all = false,) {
    return new Promise((resolve) => {
        uni.createSelectorQuery().in(context)[all ? 'selectAll' : 'select'](selector).boundingClientRect((rect) => {
            resolve(rect)
        }).exec()
    })
}

/**
 * 页面(url)传参字符串进行编码,解码
 * @param {Object} query
 * @description 页面跳转携带中文参数时,可使用
 */

const qsDecode = function(query) {
    if (!query && typeof query !== 'object') {
        throw new Error('error arguments', 'qsDecode')
    }
    const target = {}
    Object.keys(query).forEach(key => {
        target[key] = decodeURIComponent(query[key])
    })
    return target
}

/**
   * 个性化 console.log
   * @param {*} type
   * @param {*} key
   * @param {*} text
   */
const log = (type = 'danger', key = '错误', text = '系统异常') => {
    /* #ifndef H5 */
    console.log(`%c ${key} %c ${text}`)
    /* #endif */
    /* #ifdef  H5 */
    let bgColor = '#ee0a24'
    switch (type) {
        case 'default':
            bgColor = '#515a6e'
            break
        case 'primary':
            bgColor = '#07c160'
            break
        case 'info':
            bgColor = '#1989fa'
            break
        case 'warning':
            bgColor = '#ff976a'
            break
        case 'danger':
            bgColor = '#ee0a24'
            break
        default:
            break
    }
    console.log(`%c ${key} %c ${text}`, 'background:#7ebea0; padding: 2px 4px; border-radius: 3px 0 0 3px; color: #fff;', `background:${bgColor};padding: 2px 4px; border-radius: 0 3px 3px 0;  color: #fff;`)
    /* #endif */
}

module.exports = {
    getSystemInfoSync,
    padZero,
    storageSync,
    getPrevPage,
    promisify,
    addUnit,
    rpx2px,
    qsStringify,
    qsDecode,
    log,
    getRect
}
