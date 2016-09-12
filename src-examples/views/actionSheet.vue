<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Action Sheet</span>
  </header-bar>
  <content class="center-block">
    <button-area>
      <button text="点击弹出 Action Sheet" @click="showActionSheet()" raised></button>
      <button text="不带 cancel 按钮的" @click="showActionSheet(true)" raised></button>
    </button-area>
  </content>
  <action-sheet :actions="actionSheet.actions" :show.sync="actionSheet.show" :show-cancel="actionSheet.showCancel"></action-sheet>
  <modal :show.sync="modal.show" :title="modal.title" :msg="modal.msg"></modal>
</div>
</template>

<script>
export default {
  data () {
    return {
      actionSheet: {
        show: false,
        showCancel: true,
        actions: [{
          isLabel: true,
          name: '选择一个你喜欢的'
        }, {
          name: '守望先锋',
          click: () => {
            this.showMsg('守望先锋')
          }
        }, {
          name: '炉石传说',
          click: () => {
            this.showMsg('炉石传说')
          }
        }, {
          name: '英雄联盟',
          color: 'red',
          click: () => {
            this.showMsg('英雄联盟')
          }
        }, {
          name: '剑灵',
          click: () => {
            this.showMsg('剑灵')
          }
        }]
      },
      modal: {
        show: false,
        msg: '',
        title: '你选择的是'
      }
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    showMsg (msg) {
      this.modal.msg = msg
      this.modal.show = true
    },
    showActionSheet (flag) {
      this.actionSheet.show = true
      this.actionSheet.showCancel = !flag
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css">
.center-block{
  display: flex;
  align-items: center;
}
</style>
