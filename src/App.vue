<script>
export default {
  onLaunch: function () {
    console.log('App Launch', uni.getSystemInfoSync())
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
}
</script>

<style lang="scss">
@import '@/styles/index.scss';

/* #ifndef APP-NVUE */
// 每个页面公共css
page {
  line-height: 1.2;
  color: #323233;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC',
    'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background-color: #f7f8fa;
}

// 隐藏滚动条
::-webkit-scrollbar {
  display: none;
}
/* #endif */
</style>
