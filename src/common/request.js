/**
 * request
 */
import config from '@/config'
import store from '@/store'

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
var timestamp = 0
// 请求配置
fly.config.baseURL = config.base_api
// fly.config.headers['content-type'] = 'application/json;charset=utf-8' // 默认JSON 提交
fly.config.headers['content-type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// 添加请求拦截器
fly.interceptors.request.use(
  config => {
    // #ifdef APP-PLUS
    console.log('request ' + config.baseURL + config.url, JSON.stringify(config.body))
    // #endif
    store.state.token && (config.headers['token'] = store.state.token)
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    const { status, data } = response
    if (Number(status) === 200) {
      if (Number(data.code) === 0) {
        // 只将请求结果的 data字段返回
        return Promise.resolve(data)
      } else {
        serviceErrorHandle(data)
        return Promise.reject(response)
      }
    } else {
      httpErrorHandle(response)
      return Promise.reject(response)
    }
  },
  err => {
    // 发生网络错误后会走到这里
    httpErrorHandle(err)
    return Promise.reject(err)
  },
)

// 处理HTTP错误（非200）
function httpErrorHandle(err) {
  // console.log('处理HTTP错误 httpErrorHandle', err)
  const code = err.status
  switch (code) {
    case 0:
      uni.showToast({
        icon: 'none',
        title: '当前网络不可用，请检查你的网络设置',
        duration: 3000,
      })
      break
    case 1:
      uni.showToast({
        icon: 'none',
        title: '请求超时',
        duration: 3000,
      })
      break
    default:
      uni.showToast({
        icon: 'none',
        title: `[${code}] 错误`,
        duration: 3000,
      })
      break
  }
}
// 处理业务错误
function serviceErrorHandle(data) {
  // console.log('处理业务错误 serviceErrorHandle', data)
  const code = data.code
  switch (code) {
    case 205:
      // 未登录
      store.commit('logout')
      toLogin()
      break
    default:
      if (config.isDevelop) {
        uni.showToast({
          icon: 'none',
          title: `status:${data.code},msg:${data.msg}`,
        })
      } else {
        uni.showToast({
          icon: 'none',
          title: data.msg,
        })
      }

      break
  }
}

// 跳转登录
function toLogin() {
  const newTimestamp = +new Date()
  if (newTimestamp - timestamp > 3000) {
    timestamp = newTimestamp
    setTimeout(() => {
      console.log('跳转登录页')
      uni.navigateTo({
        url: '/pages/login/login',
      })
    }, 150)
  }
}
export default fly
