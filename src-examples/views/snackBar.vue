<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>SnackBar</span>
    </header-bar>
    <scroll-view>
      <button-area>
        <button fill raised color="red" text="显示 snackBar" @click="show('一段简单的文字')"></button>
        <button fill raised color="red" text="显示 action snackBar" @click="show('一段简单的文字', '点我')"></button>
      </button-area>
    </scroll-view>
    <snack-bar v-for="snack in snackBars" :message="snack.message" :action="snack.action" @action-click="handlerAction"></snack-bar>
    <alert :title="alert.title" :type="alert.type" :show.sync="alert.show" v-if="alert.show" :msg="alert.msg" ></alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alert: {
        show: false
      },
      snackBars: []
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    show (msg, action) {
      this.snackBars.push({
        message: msg,
        action: action,
        show: true
      })
      setTimeout(() => this.snackBars.splice(0, 1), 2000)
    },
    handlerAction () {
      this.alert = {
        show: true,
        title: '消息',
        msg: '您点击了action button'
      }
    }
  }
}
</script>

<style lang="css">
</style>
