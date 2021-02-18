import Vue from 'vue'
import Vuex from 'vuex'
import util from '@/common/util'
import { userInfo } from '@/common/constant'

Vue.use(Vuex)

function getterSysInfo(sysInfo) {
  function getScope(platform) {
    let scope = 'h5'
    // #ifdef MP-WEIXIN
    scope = 'mini'
    // #endif
    // #ifdef APP-PLUS
    if (/ios/i.test(platform)) {
      scope = 'ios'
    }

    if (/android/i.test(platform)) {
      scope = 'android'
    }
    // #endif
    return scope
  }
  sysInfo.scope = getScope(sysInfo.platform)
  console.log('sysInfo', JSON.stringify(sysInfo))
  return sysInfo
}

const store = new Vuex.Store({
  state: {
    loginProvider: 'system', // system, phone, weixin
    hasLogin: false,
    token: util.storageSync.get('token'),
    sysInfo: getterSysInfo(uni.getSystemInfoSync()),
    userInfo: Object.assign({}, userInfo, util.storageSync.get('userInfo')),
  },
  mutations: {
    login(state, data) {
      console.log(`---${data.provider || ''} 完成登录---`)
      state.hasLogin = true
      state.loginProvider = data.provider || 'system'
      // 设置登录
      state.token = data.token
      util.storageSync.set('token', data.token)
      // data.expiresIn && util.storageSync.set('expires_in', data.expiresIn)
    },
    logout(state, data = {}) {
      console.log(`---${data.type || 'request'} 退出登录---`)
      state.hasLogin = false
      // 移除登录数据
      state.token = ''
      util.storageSync.remove('token')
      // util.storageSync.remove('expires_in')

      // 设置全局数据初始值
      state.userInfo = userInfo
      util.storageSync.set('userInfo', userInfo)
    },
    setUserInfo(state, data) {
      console.log(`---设置用户信息---`)
      const newInfo = Object.assign({}, userInfo, data)

      state.userInfo = newInfo
      util.storageSync.set('userInfo', newInfo)
    },
    setSysInfo(state, sysInfo) {
      state.sysInfo = getterSysInfo(sysInfo)
    },
  },
  actions: {
    // lazy loading openid
    getUserOpenId: async function ({ commit, state }) {
      return await new Promise((resolve, reject) => {
        if (state.openid) {
          resolve(state.openid)
        } else {
          uni.login({
            success: data => {
              commit('login')
              setTimeout(function () {
                //模拟异步请求服务器获取 openid
                const openid = '123456789'
                console.log('uni.request mock openid[' + openid + ']')
                commit('setOpenid', openid)
                resolve(openid)
              }, 1000)
            },
            fail: err => {
              console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
              reject(err)
            },
          })
        }
      })
    },
  },
})

export default store
