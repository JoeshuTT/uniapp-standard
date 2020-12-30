export default {
  data() {
    return {
      pageTitle: '',
      pageQuery: {},
    }
  },
  onLoad(options) {
    console.log('options', options)
    if (options.pageTitle) {
      this.pageTitle = decodeURIComponent(options.pageTitle)
    }
  },
  onReady() {
    if (this.pageTitle) {
      uni.setNavigationBarTitle({
        title: `${this.pageTitle}`,
      })
    }
  },
  methods: {
    onNavigator(url) {
      uni.navigateTo({
        url,
      })
    },
  },
}
