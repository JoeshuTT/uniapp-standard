<template>
  <view class="container">
    <!--  -->
    <i-button class="mb20" custom-class="mb20" type="default">默认按钮</i-button>
    <i-button class="mb20" custom-class="mb20" type="primary">主要按钮</i-button>
    <i-button class="mb20" custom-class="mb20" type="info"><text>信息按钮</text></i-button>
    <i-button class="mb20" custom-class="mb20" type="warning" text="警告按钮" />
    <i-button class="mb20" custom-class="mb20" type="danger" text="危险按钮" />
  </view>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  mixins: [pageMixin],
  data() {
    return {}
  },
  onLoad(options) {
    //
  },
  methods: {},
}
</script>

<style lang="scss">
//
</style>
