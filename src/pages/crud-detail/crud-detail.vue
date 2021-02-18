<template>
  <view class="container">
    <view class="list">
      <view v-for="(item, index) in list" :key="index" class="list-item">{{ item.name }}</view>
    </view>
    <view class="btn-area">
      <i-button class="mb20" type="default">更新</i-button>
      <button type="danger" size="40" bindtap="removeTodo" :loading="deleting">删除</button>
    </view>
  </view>
</template>

<script>
import pageMixin from '@/mixins/page'

export default {
  mixins: [pageMixin],
  data() {
    return {
      list: [],
      deleting: false,
    }
  },
  onLoad() {
    //
  },
  methods: {},
}
</script>

<style lang="scss">
//
</style>
