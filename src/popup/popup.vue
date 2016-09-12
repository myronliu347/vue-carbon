<template>
  <div v-show="show" class="vc-popup" :style="{'z-index': zIndex}" :class="[position ? 'vc-popup-' + position : '']" :transition="popupTransition">
    <slot></slot>
  </div>
</template>

<script>
import Popup from './index'
import {getZIndex} from '../utils'
export default {
  mixins: [Popup],
  props: {
    clickOverlayClose: {
      type: Boolean,
      default: true
    },

    popupTransition: {
      type: String,
      default: 'popup-slide'
    },

    position: {
      type: String,
      default: ''
    }
  },
  computed: {
    zIndex () {
      return this.overlay ? '' : getZIndex()
    }
  },
  compiled () {
    if (this.popupTransition !== 'popup-fade') {
      this.popupTransition = `popup-slide-${this.position}`
    }
  },

  methods: {
    overlayClick () {
      if (this.clickOverlayClose) this.show = false
    }
  }
}
</script>

<style lang="css">
.vc-popup {
  position: fixed;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
}

.vc-popup-top {
  top: 0;
  right: auto;
  bottom: auto;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.vc-popup-right {
  top: 50%;
  right: 0;
  bottom: auto;
  left: auto;
  transform: translate3d(0, -50%, 0);
}
.vc-popup-bottom {
  top: auto;
  right: auto;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.vc-popup-left {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 0;
  transform: translate3d(0, -50%, 0);
}

.popup-slide-top-transition,
  .popup-slide-right-transition,
  .popup-slide-bottom-transition,
  .popup-slide-left-transition {
    transition: transform .3s ease;
  }

  .popup-slide-top-enter,
  .popup-slide-top-leave {
    transform: translate3d(-50%, -100%, 0);
  }

  .popup-slide-right-enter,
  .popup-slide-right-leave {
    transform: translate3d(100%, -50%, 0);
  }

  .popup-slide-bottom-enter,
  .popup-slide-bottom-leave {
    transform: translate3d(-50%, 100%, 0);
  }

  .popup-slide-left-enter,
  .popup-slide-left-leave {
    transform: translate3d(-100%, -50%, 0);
  }

  .popup-fade-transition {
    transition: opacity .3s;
  }

  .popup-fade-enter,
  .popup-fade-leave {
    opacity: 0;
  }
</style>
