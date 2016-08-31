<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Badge</span>
  </header-bar>
  <content>
    <content-block>
        <div>
          这里有许多的常用的弹出框，
          例如 alert、 confirm、 prompt....
          alert有多种级别的提醒，点击一下就知道啦！
        </div>
        <button-row>
          <button text="Modal" raised @click="showModal"></button>
          <button text="Alert" raised @click="showAlert"></button>
        </button-row>
        <button-row>
          <button text="confirm" raised @click="showConfirm"></button>
          <button text="prompt" raised @click="showPrompt"></button>
        </button-row>
      </content-block>
  </content>
  <modal title="标题" :show.sync="modal">
    这里是内容区域，点击关闭按钮，或者遮盖层关闭
  </modal>
  <alert :title="alert.title" :show.sync="alert.show" :msg="alert.msg" ></alert>
  <confirm :title="confirm.title" show-icon @sure="handlerSure" :show.sync="confirm.show" :msg="confirm.msg" ></confirm>
  <prompt :title="prompt.title" @sure="handlerSure" :show.sync="prompt.show" :msg="prompt.msg" ></prompt>
</div>
</template>

<script>
export default {
  data () {
    return {
      modal: false,
      alert: {
        show: false
      },
      confirm: {
        show: false
      },
      prompt: {
        show: false
      }
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    showModal () {
      this.modal = true
    },
    closeAlert () {
      this.alert.show = false
    },
    showAlert () {
      this.alert = {
        title: '标题',
        msg: '这是内容',
        show: true
      }
    },
    showConfirm () {
      this.confirm = {
        title: '问题',
        msg: '你确定？',
        show: true
      }
    },
    showPrompt () {
      this.prompt = {
        title: '录入信息',
        msg: '请输入你的姓名',
        show: true
      }
    },
    handlerSure (input) {
      if (input) {
        this.alert = {
          title: '信息',
          msg: '你输入的是：' + input,
          show: true
        }
      } else {
        this.alert = {
          title: '信息',
          msg: '你点击了确定',
          show: true
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
