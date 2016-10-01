<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Button</span>
  </header-bar>
  <scroll-view>
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
          <button fill raised text="default"></button>
          <button fill raised color="red" text="red"></button>
          <button fill raised color="blue" text="blue"></button>
        </button-row>
        <button-row>
          <button fill raised color="green" text="green"></button>
          <button fill raised color="amber" text="amber"></button>
        </button-row>
      </content-block>

      <content-title>Big Buttons</content-title>
      <content-block>
        <button-row>
          <button big text="button"></button>
          <button big text="button"></button>
        </button-row>
        <button-row>
          <button fill big raised color="red" text="button"></button>
          <button fill big raised color="red" text="button"></button>
        </button-row>
      </content-block>
      <content-title>icon buttons</content-title>
      <content-block class="inline-content-block">
        <icon-button icon="mode_edit"></icon-button>
        <icon-button icon="share" fill></icon-button>
        <icon-button icon="search" color="red" fill></icon-button>
        <icon-button icon="add" color="green" fill></icon-button>
      </content-block>
  </scroll-view>
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
.inline-content-block{
    display: flex;
    justify-content: flex-start;
}

.inline-content-block .vc-icon-button {
    margin-left: 10px;
}

</style>
