<template>
  <div class="toast" :style="{'z-index': zIndex}" :class="{'toast-center': center || loading}" transition="fade">
    <circular :size="36" v-if="loading" color="#FFF"></circular>
    <icon v-if="icon && !loading" :value="icon" :size="36"></icon>
    <div class="toast-text">{{text}}</div>
  </div>
</template>

<script>
import {getZIndex} from '../utils'
import icon from '../icon/icon'
import circular from '../circular'
export default {
  data () {
    return {
      zIndex: getZIndex()
    }
  },
  props: {
    center: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  components: {
    icon,
    circular
  }
}
</script>

<style lang="less">
.toast{
  position: fixed;
  left: 50%;
  bottom: 50px;
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  padding: 10px;
  z-index: 1000;
  transform: translate3d(-50%, 0, 0);
  .toast-text{
    font-size: 1.4rem;
    display: block;
    text-align: center;
  }
  &.toast-center {
    top: 50%;
    bottom: auto;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
