// validate

/**
 * 验证 - 是否有值
 * @param {*} value
 * @returns {Boolean}
 */
export function isDef(value) {
  return value !== undefined && value !== null
}

/**
 * isNaN
 * @param {Number} val
 * @returns {Boolean}
 */
export function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val)
  }

  // eslint-disable-next-line no-self-compare
  return val !== val
}

/**
 * 验证 - 是否是对象
 * @param {*} x
 * @returns {Boolean}
 */
export function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

/**
 * 验证 - 是否是字符串
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * 验证 - 是否是数字
 * @param {Number} value
 * @returns {Boolean}
 */
export function isNumber(value) {
  return /^\d+$/.test(value)
}

/**
 * 验证 - 是否是带小数点的数字
 * @param {String} val
 * @returns {Boolean}
 */
export function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val)
}

/**
 * 验证 - 是否是数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 验证 - 是否是对象{}，非数组情况
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isObject(arg) {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

/**
 * 验证 - 是否为空数据
 * @param {*} obj
 * @returns {Boolean}
 */
export function isEmpty(obj) {
  if (obj == null) {
    return true
  }
  if (isArray(obj)) {
    return obj.length === 0
  }
  if (isString(obj)) {
    return !`${obj}`.trim().length
  }
  if (JSON.stringify(obj) === '{}') {
    return true
  }
  return false
}

/**
 * 验证 - 是否为URL
 * @param {*} value
 * @returns {Boolean}
 */
export function isUrl(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value)
}
