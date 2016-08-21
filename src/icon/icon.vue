<template>
  <i class="icon" :class="classNames" :style="{'font-size': size + 'px'}"><slot></slot></i>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    classNames () {
      let obj = {}
      obj['icon-' + this.value] = true
      return obj
    }
  }
}
</script>

<style lang="css">
@import "./style.css";
.icon{
  position: relative;
}
</style>
