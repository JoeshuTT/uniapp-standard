import request from '@/common/request'

/**
 * 主键查询
 *  @param {Object} data
 */
const query = function (data) {
  return request.get(`/shop`, data)
}

/**
 * 新增
 *  @param {Object} data
 */
const create = function (data) {
  return request.post(`/shop`, data)
}

/**
 * 修改
 *  @param {Object} data
 */
const put = function (data) {
  return request.put(`/shop`, data)
}

/**
 * 批量删除
 *  @param {Object} data
 */
const batchDel = function (data) {
  return request.delete(`/shop/batch`, data)
}

/**
 * 列表查询
 *  @param {Object} data
 */
const list = function (data) {
  //   return request.delete(`/shop/list`, data)
  return request.get(`https://www.fastmock.site/mock/f20c7263081c9da6dfd592e73e818e8e/mock/api/goods/list`, data)
}

/**
 * 分页查询
 *  @param {Object} data
 */
const page = function (data) {
  return request.get(`/shop/page`, data)
}

export default {
  query,
  create,
  put,
  batchDel,
  list,
  page,
}
