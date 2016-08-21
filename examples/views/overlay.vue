<template>
<div class="page">
  <header-bar>
    <action slot="left" @click="back()">
      <icon value="arrow_back"></icon>
    </action>
    <span>overlay</span>
  </header-bar>
  <content>
    <button-area>
      <button fill raised text="show overlay" @click="toggleOverlay()"></button>
      <button fill raised text="show white overlay" @click="toggleWhiteOverlay()"></button>
    </button-area>
    <overlay v-if="showWhite" white @click="toggleWhiteOverlay()"></overlay>
  </content>
  <overlay v-if="show" @click="toggleOverlay()"></overlay>
</div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      showWhite: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    toggleOverlay () {
      this.show = !this.show
    },
    toggleWhiteOverlay () {
      this.showWhite = !this.showWhite
    }
  }
}
</script>

<style lang="css">
</style>
