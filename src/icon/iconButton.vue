<template>
  <a class="icon-button" href="javascript:;" :class="buttonClass" v-el:button>
    <icon :value="icon"></icon>
    <ripple :trigger="$els.button"></ripple>
  </a>
</template>

<script>
import icon from './icon'
import ripple from '../ripple'
export default {
  props: {
    icon: {
      type: String,
      require: true,
      default: ''
    },
    fill: {
      type: Boolean,
      default: false
    },
    gray: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass () {
      let classNames = {
        'icon-button-fill': this.fill,
        'icon-button-gray': this.gray
      }
      classNames['color-' + this.color] = true
      return classNames
    }
  },
  components: {
    icon,
    ripple
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.icon-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  appearance: none;
  background: none;
  text-decoration: none;
  margin: 0;
  outline: 0;
  transition-duration: 300ms;
  transform: translate3d(0, 0, 0);
  border-radius: 50%;
  color: @color;
  .flex-shrink(0);
  &:active{
    background: @tap-color;
  }
  .ripple-ink{
    color: @tap-color;
  }
}

.icon-button-fill {
  background-color: @red;
  color: #fff;
  .ripple-ink{
    color: rgba(255,255,255,0.4);
  }
  &:active {
    background: darken(@red, 8%);
  }
}

.icon-button-gray {
  background-color: @carbon;
  &:active {
    background: darken(@carbon, 8%);
  }
}
</style>
