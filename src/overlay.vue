<template>
  <div class="overlay" :style="{'z-index': zIndex}" :class="{'overlay-white': white}" transition="fade"></div>
</template>
<script>
import {getZIndex} from './utils'
export default {
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    }
  }
}
</script>
<style lang="less">
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  opacity: .4;
  z-index: 1000;
}

.overlay-white{
  background-color: #FFF;
  opacity: .8;
}

.overlay-fade-transition {
  transition: opacity .3s linear;
  &.overlay-fade-enter,
  &.overlay-fade-leave {
    opacity: 0;
  }
}
</style>
