<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Indicator</span>
    </header-bar>
    <scroll-view class="center-block">
      <button-area>
        <button text="点击弹出 indicator" @click="showIndicator()" raised></button>
        <button text="弹出 modal indicator" @click="showModalIndicator()" raised></button>
        <button text="控制透明度" @click="showOpactiyIndicator()" raised></button>
      </button-area>
    </scroll-view>
    <indicator :show="indicator.show" :type="indicator.type" :text="indicator.text"  :overlay-opacity="indicator.opactiy"></indicator>
  </div>
</template>

<script>
export default {
  data () {
    return {
      indicator: {
        show: false,
        type: 'toast'
      }
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    showIndicator () {
      this.indicator = {
        show: true,
        type: 'toast',
        text: '加载中...'
      }
      setTimeout(() => { this.indicator.show = false }, 2000)
    },
    showModalIndicator () {
      this.indicator = {
        show: true,
        type: 'modal',
        text: '加载中...'
      }
      setTimeout(() => { this.indicator.show = false }, 2000)
    },
    showOpactiyIndicator () {
      this.indicator = {
        show: true,
        type: 'toast',
        opactiy: 0.4,
        text: '加载中...'
      }
      setTimeout(() => { this.indicator.show = false }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
