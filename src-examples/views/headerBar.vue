<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Header Bar</span>
    </header-bar>
    <content>
      <header-bar class="header-bar-demo">
        <span>默认</span>
      </header-bar>

      <header-bar class="header-bar-demo">
        <icon-button slot="left" icon="menu"></icon-button>
        <span>左边有 icon</span>
      </header-bar>

      <header-bar class="header-bar-demo">
        <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
        <span>两边有 icon</span>
        <icon-button slot="right" icon="search"></icon-button>
        <icon-button slot="right" icon="share"></icon-button>
      </header-bar>
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
.header-bar-demo{
  margin-top: 16px;
}
</style>
