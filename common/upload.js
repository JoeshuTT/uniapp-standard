import API_FILE from '@/apis/file'
import config from '@/config'
import util from '@/common/util.js'

/**
 * 选择单个本地图片上传
 * @param {String} filePath
 */
export const uploadImg = function (filePath) {
  return new Promise(function (resolve, reject) {
    uni.showLoading({ mask: true, title: '上传中...' })

    uni.uploadFile({
      header: { token: util.storageSync.get('token') },
      url: `${config.static_api}${API_FILE.uploadJson}`,
      filePath,
      name: 'file',
      success: res => {
        console.log('uni.uploadFile res: ' + JSON.stringify(res))
        if (res.statusCode === 200) {
          const response = JSON.parse(res.data)
          resolve(response)
        } else {
          console.log('图片接口上传失败:' + res.statusCode + res.errMsg)
          reject(res)
        }
      },
      fail: err => {
        console.log('图片上传失败:', err)
        // uni.showToast({
        //   icon: 'none',
        //   title: '图片上传失败',
        // })
        reject(err)
      },
      complete: () => {
        uni.hideLoading()
      },
    })
  })
}
