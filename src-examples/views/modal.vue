<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Modal</span>
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
          <button text="Alert" raised @click="showAlert('')"></button>
        </button-row>
        <button-row>
          <button text="confirm" raised @click="showConfirm"></button>
          <button text="prompt" raised @click="showPrompt"></button>
        </button-row>
      </content-block>
      <content-block>
        <div class="">
          不同类型的alert
        </div>
        <button-row>
          <button text="info" raised @click="showAlert('info')"></button>
          <button text="success" raised @click="showAlert('success')"></button>
        </button-row>
        <button-row>
          <button text="warning" raised @click="showAlert('warning')"></button>
          <button text="error" raised @click="showAlert('error')"></button>
        </button-row>
      </content-block>
      <content-block>
        <div class="">
          自定义的modal
        </div>
        <button-row>
          <button text="select Modal" raised @click="showSelectModal()"></button>
          <button text="Login Modal" raised @click="showLoginModal()"></button>
        </button-row>
      </content-block>
  </content>
  <modal title="标题" :show.sync="modal">
    这里是内容区域，点击关闭按钮，或者遮盖层关闭
  </modal>

  <modal title="Select Modal" :show.sync="selectModal">
    <div class="">
      选择一个你喜欢的
    </div>
    <div class="demo-select-modal">
      <radio :model="radio" name="demoModal" value="守望先锋" label="守望先锋"></radio>
      <radio :model="radio" name="demoModal" value="英雄联盟" label="英雄联盟"></radio>
      <radio :model="radio" name="demoModal" value="精灵宝可梦go" label="精灵宝可梦go"></radio>
      <radio :model="radio" name="demoModal" value="王者荣耀" label="王者荣耀"></radio>
    </div>
  </modal>
  <modal title="Login Modal" :show.sync="loginModal">
    <div class="login-modal">
      <text-field label="用户名" placeholder="请输入用户名"></text-field>
      <text-field label="密码" placeholder="请输入密码" type="password"></text-field>
      <item-form>
        <switch label="自动登录"></switch>
      </item-form>
    </div>
    <button text="取消" slot="footer" @click="this.loginModal = false" fill></button>
    <button text="登录" slot="footer" @click="this.loginModal = false" color="red" fill></button>
  </modal>
  <alert :title="alert.title" :type="alert.type" :show.sync="alert.show" v-if="alert.show" :msg="alert.msg" ></alert>
  <confirm :title="confirm.title" show-icon @sure="handlerSure" :show.sync="confirm.show" :msg="confirm.msg" ></confirm>
  <prompt :title="prompt.title" @sure="handlerSure" :show.sync="prompt.show" :msg="prompt.msg" ></prompt>
</div>
</template>

<script>
export default {
  data () {
    return {
      radio: '守望先锋',
      modal: false,
      selectModal: false,
      loginModal: false,
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
    showSelectModal () {
      this.selectModal = true
    },
    showLoginModal () {
      this.loginModal = true
    },
    closeAlert () {
      this.alert.show = false
    },
    showAlert (type) {
      this.alert = {
        title: '标题',
        msg: !type ? '这是内容' : type === 'info' ? '这是普通信息' : type === 'success' ? '成功啦！' : type === 'warning' ? '这是提醒！' : '出错啦！',
        show: true,
        type: type
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
.demo-select-modal{
  display: flex;
  flex-direction: column;
}
.login-modal .item-form{
  padding: 0;
}
.login-modal .item-form-content{
  padding: 0;
  padding-top: 10px;
}
</style>
