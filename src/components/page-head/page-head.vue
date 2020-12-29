<template name="page-head">
  <view class="uni-page-head">
    <view class="uni-page-head-title">{{ title }}</view>
  </view>
</template>
<script>
export default {
  name: 'PageHead',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
