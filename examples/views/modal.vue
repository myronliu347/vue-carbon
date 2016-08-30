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
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    },
    showModal () {},
    showAlert () {},
    showConfirm () {},
    showPrompt () {}
  }
}
</script>

<style lang="css">
</style>
