<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Select Field</span>
  </header-bar>
  <content>
    <content-title>
      选择框
    </content-title>
    <form-list>
      <select-field label="单选框" :options="games" placeholder="选择一个你喜欢的"></select-field>
      <select-field label="多选框" multi :options="games" placeholder="选择一个你喜欢的"></select-field>
    </form-list>
    <content-title>
      带 icon 的选择框
    </content-title>
    <form-list>
      <select-field icon="favorite" label="单选框" :options="games" placeholder="选择一个你喜欢的"></select-field>
      <select-field icon="star" label="多选框" multi :options="games" placeholder="选择一个你喜欢的"></select-field>
    </form-list>
  </content>
</div>
</template>

<script>
export default {
  data () {
    return {
      games: [{
        value: '01',
        text: '守望先锋'
      }, {
        value: '03',
        text: '英雄联盟'
      }, {
        value: '04',
        text: '炉石传说'
      }, {
        value: '05',
        text: '风暴英雄'
      }]
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
