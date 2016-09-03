<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
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
