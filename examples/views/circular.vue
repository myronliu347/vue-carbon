<template>
<div class="page">
  <header-bar>
    <action slot="left" @click="back()">
      <icon value="arrow_back"></icon>
    </action>
    <span>Circular</span>
  </header-bar>
  <content>
    <div class="content-block">
      <circular style="margin-left: 16px;"></circular>
      <circular style="margin-left: 16px;" color="#ffc107" :size="36"></circular>
      <circular style="margin-left: 16px;" color="#4caf50" :size="48"></circular>
    </div>
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
