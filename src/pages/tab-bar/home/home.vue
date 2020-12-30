<template>
  <view class="container">
    <!--  -->
    <i-button class="mb20" custom-class="mb20" type="default" @click="onClick">navigateTo</i-button>
    <i-button class="mb20" custom-class="mb20" type="primary" @click="onRequest">request</i-button>
    <i-button class="mb20" custom-class="mb20" type="info"><text>信息按钮</text></i-button>
    <i-button class="mb20" custom-class="mb20" type="warning" text="警告按钮aa" />
    <i-button class="mb20" custom-class="mb20" type="danger" text="危险按钮" />
  </view>
</template>

<script>
import pageMixin from '@/mixins/page'
import API_EXAMPLE from '@/apis/example'

export default {
  mixins: [pageMixin],
  data() {
    return {}
  },
  onLoad(options) {},
  methods: {
    onClick() {
      //   uni.showToast({
      //     icon: 'none',
      //     title: '11',
      //   })
      uni.navigateTo({
        url: `/pages/temp/temp`,
      })
    },
    onRequest() {
      //   console.log(API_EXAMPLE.list)
      API_EXAMPLE.list()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
//
</style>
