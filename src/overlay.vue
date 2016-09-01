<template>
  <div class="overlay" @click="handlerClick" @touchmove="prevent" :style="style" transition="fade"></div>
</template>
<script>
import {getZIndex} from './utils'
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.4
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
      zIndex: getZIndex()
    }
  },
  computed: {
    style () {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      }
    }
  },
  methods: {
    prevent (event) {
      event.preventDefault()
      event.stopPropagation()
    },
    handlerClick () {
      if (this.onClick) {
        this.onClick()
      }
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


.overlay-fade-transition {
  transition: all .3s linear;
  &.overlay-fade-enter,
  &.overlay-fade-leave {
    opacity: 0;
  }
}
</style>
