<template>
  <a href="javascript:;" class="button" :class="buttonClass">
    <icon v-if="icon" :value="icon"></icon>
    <span class="button-text">{{text}}</span>
  </a>
</template>

<script>
import icon from '../icon/icon'
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    fill: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    big: {
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
      let style = {
        'button-fill': this.fill,
        'button-big': this.big,
        'button-raised': this.raised,
        'button-gray': this.gray
      }
      style['color-' + this.color] = true
      return style
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.button {
  color: @red;
  text-decoration: none;
  text-align: center;
  display: block;
  border-radius: 2px;
  line-height: 36px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background: none;
  padding: 0 10px;
  margin: 0;
  height: 36px;
  white-space: nowrap;
  text-overflow:ellipsis;
  text-transform: uppercase;
  font-family: inherit;
  cursor: pointer;
  min-width: 64px;
  padding: 0 8px;
  position: relative;
  overflow: hidden;
  outline: 0;
  border: none;
  transition-duration: 300ms;
  transform: translate3d(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  input[type="submit"]&, input[type="button"]&{
    width: 100%;
  }
  html:not(.watch-active-state) &:active, &.active-state {
    background: rgba(0,0,0,0.1);
  }
  i.icon + span,
  span:not(.ripple-wave) + span,
  span:not(.ripple-wave) + i.icon,
  i.icon + i.icon {
    margin-left: 8px;
  }
  .icon{
    .flex-shrink(0);
  }

  .button-text{
    .flex-shrink(1);
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden; word-wrap:
    break-word;
  }

  &.button-fill {
    background-color: @red;
    color: #fff;
    html:not(.watch-active-state) &:active, &.active-state {
      background: darken(@red, 8%);
    }
  }

  &.button-gray {
    background-color: @carbon;
    html:not(.watch-active-state) &:active, &.active-state {
      background: darken(@carbon, 8%);
    }
  }
  &.button-big {
    height: 48px;
    line-height: 48px;
    border-radius: 3px;
  }

}

.button-raised {
    .depth(1);
    html:not(.watch-active-state) &:active, &.active-state {
        .depth(2);
    }
}
</style>
