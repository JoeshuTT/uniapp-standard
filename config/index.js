/**
 * 根据当前环境是开发环境还是生产环境，动态进行配置
 */

const themeColor = '#42b983'
const appName = 'uniapp-standard'

// development, production
const config = {
  development: {
    isDevelop: true,
    appName,
    themeColor,
    base_api: '',
    socket_api: '',
    static_api: '',
  },
  production: {
    isDevelop: false,
    appName,
    themeColor,
    base_api: '',
    socket_api: '',
    static_api: '',
  },
}

export default config[process.env.NODE_ENV]
