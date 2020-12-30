// request
var Fly = require('flyio/dist/npm/wx')

var fly = new Fly()

// 请求配置
fly.config.baseURL = '111'
fly.config.headers['content-type'] = 'application/x-www-form-urlencoded'
// fly.config.headers['content-type'] = 'application/json'

// 添加请求拦截器
fly.interceptors.request.use(
  config => {
    // console.log(config)
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
  console.log('处理HTTP错误 httpErrorHandle', err)
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
  console.log('处理业务错误 serviceErrorHandle', data)

  uni.showToast({
    icon: 'none',
    title: `status:${data.code},msg:${data.msg}`,
  })
}

export default fly
