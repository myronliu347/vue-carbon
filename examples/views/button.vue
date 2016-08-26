<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Button</span>
  </header-bar>
  <content>
    <content-title>flat buttons</content-title>
      <content-block>
        <button-row>
          <button text="button"></button>
          <button text="button"></button>
          <button text="button"></button>
        </button-row>
        <button-row>
          <button text="button"></button>
          <button text="button"></button>
        </button-row>
      </content-block>

      <content-title>Raised Buttons</content-title>
      <content-block>
        <button-row>
          <button raised text="button"></button>
          <button raised text="button"></button>
          <button raised text="button"></button>
        </button-row>
      </content-block>

      <content-title>Raised Fill Buttons</content-title>
      <content-block>
        <button-row>
          <button fill raised text="button"></button>
          <button fill raised text="button"></button>
          <button fill raised text="button"></button>
        </button-row>
      </content-block>

      <content-title>Color Buttons</content-title>
      <content-block>
        <button-row>
          <button fill raised gray text="button"></button>
          <button fill raised text="button"></button>
        </button-row>
      </content-block>

      <content-title>Big Buttons</content-title>
      <content-block>
        <button-row>
          <button big text="button"></button>
          <button big text="button"></button>
        </button-row>
        <button-row>
          <button fill big raised text="button"></button>
          <button fill big raised text="button"></button>
        </button-row>
      </content-block>
      <content-title>icon buttons</content-title>
      <content-block>
        <icon-button icon="mode_edit"></icon-button>
        <icon-button icon="search" fill gray></icon-button>
        <icon-button icon="add" fill></icon-button>
      </content-block>
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
