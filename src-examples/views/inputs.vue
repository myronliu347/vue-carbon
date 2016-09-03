<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Text Field</span>
  </header-bar>
  <content>
    <content-title>输入框</content-title>
    <form-list>
      <text-field label="用户名" placeholder="请输入你的姓名" icon="account_box"></text-field>
      <text-field label="电话" type="number" placeholder="请输入你的电话" icon="phone"></text-field>
      <text-field label="简介" type="textarea" :rows="3" icon="markunread" placeholder="info_outline"></text-field>
    </form-list>
    <content-title>浮动 label 的输入框</content-title>
    <form-list>
      <text-field label-float label="用户名" icon="account_box"></text-field>
      <text-field label-float label="电话" type="number" icon="phone"></text-field>
      <text-field label-float label="简介" type="textarea" :rows="3" icon="markunread"></text-field>
    </form-list>
    <content-title>没有图标</content-title>
    <form-list>
      <text-field label="用户名"></text-field>
      <text-field label="电话" type="number"></text-field>
      <text-field label="简介" type="textarea" :rows="3"></text-field>
    </form-list>
  </content>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
