import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    hasLogin: false,
  },
  mutations: {
    login(state, provider) {
      state.hasLogin = true
      state.loginProvider = provider
    },
    logout(state) {
      state.hasLogin = false
      state.openid = null
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
            success: (data) => {
              commit('login')
              setTimeout(function () {
                //模拟异步请求服务器获取 openid
                const openid = '123456789'
                console.log('uni.request mock openid[' + openid + ']')
                commit('setOpenid', openid)
                resolve(openid)
              }, 1000)
            },
            fail: (err) => {
              console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
              reject(err)
            },
          })
        }
      })
    },
    getPhoneNumber: function ({ commit }, univerifyInfo) {
      return new Promise((resolve, reject) => {
        uni.request({
          url: 'https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/univerify-login',
          method: 'POST',
          data: univerifyInfo,
          success: (res) => {
            const data = res.data
            if (data.success) {
              resolve(data.phoneNumber)
            } else {
              reject(res)
            }
          },
          fail: (err) => {
            reject(res)
          },
        })
      })
    },
  },
})

export default store
