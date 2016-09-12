<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>overlay</span>
  </header-bar>
  <content>
    <button-area>
      <button fill raised color="red" text="显示 overlay" @click="toggleOverlay()"></button>
      <button fill raised color="red" text="显示白色的 overlay" @click="toggleWhiteOverlay()"></button>
    </button-area>
    <overlay v-if="showWhite" :opacity="0.8" color="#FFF"  @click="toggleWhiteOverlay()"></overlay>
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
