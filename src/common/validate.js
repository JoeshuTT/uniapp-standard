/**
 * 验证 - 是否有值
 * @param {*} value
 */
export function isDef(value) {
  return value !== undefined && value !== null
}

/**
 * 验证 - 是否是数字
 * @param {Number} value
 */
export function isNumber(value) {
  return /^\d+$/.test(value)
}

/**
 * isNumeric
 * @param {String} val
 */
export function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val)
}

/**
 * isNaN
 * @param {Number} val
 */
export function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val)
  }

  // eslint-disable-next-line no-self-compare
  return val !== val
}
