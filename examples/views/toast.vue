<template>
<div class="page">
  <header-bar>
    <action slot="left" @click="back()">
      <icon value="arrow_back"></icon>
    </action>
    <span>Toast</span>
  </header-bar>
  <content>
    <button-area>
      <button fill raised text="show toast" @click="show('default')"></button>
      <button fill raised text="show center toast" @click="show('center')"></button>
      <button fill raised text="show loading toast" @click="show('loading')"></button>
      <button fill raised text="show ok toast" @click="show('ok')"></button>
    </button-area>
  </content>
  <toast v-for="toast in toasts" :text="toast.text" :loading="toast.loading" :icon="toast.icon" :center="toast.center"></toast>
</div>
</template>

<script>
export default {
  data () {
    return {
      toasts: []
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    show (type) {
      switch (type) {
        case 'center':
          this.toasts.push({
            text: '在中间',
            center: true
          })
          break
        case 'loading':
          this.toasts.push({
            text: '加载中...',
            loading: true
          })
          break
        case 'ok':
          this.toasts.push({
            text: '操作成功',
            icon: 'check',
            center: true
          })
          break
        default:
          this.toasts.push({
            text: '默认toast'
          })
          break
      }
      setTimeout(() => this.toasts.splice(0, 1), 2000)
    }
  }
}
</script>

<style lang="css">
</style>
