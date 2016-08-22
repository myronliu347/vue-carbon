<template>
  <div class="page">
    <header-bar>
      <action slot="left" @click="back()">
        <icon value="arrow_back"></icon>
      </action>
      <span>Header Bar</span>
    </header-bar>
    <content>
      <header-bar class="header-bar-demo">
        <span>默认</span>
      </header-bar>

      <header-bar class="header-bar-demo">
        <action slot="left">
          <icon value="menu"></icon>
        </action>
        <span>左边有 icon</span>
      </header-bar>

      <header-bar class="header-bar-demo">
        <action slot="left" @click="back()">
          <icon value="arrow_back"></icon>
        </action>
        <span>两边有 icon</span>
        <action slot="right">
          <icon value="search"></icon>
        </action>
        <action slot="right">
          <icon value="share"></icon>
        </action>
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
