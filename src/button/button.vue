<template>
  <a href="javascript:;" class="button" v-el:button :class="buttonClass">
    <slot>
      <icon v-if="icon" :value="icon"></icon>
      <span class="button-text" v-if="text">{{text}}</span>
    </slot>
    <ripple :trigger="$els.button"></ripple>
  </a>
</template>

<script>
import ripple from '../ripple'
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
      if (this.color) style['color-' + this.color] = true
      return style
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
.button {
  color: @color;
  border-radius: 2px;
  height: 36px;
  line-height: 36px;
  appearance: none;
  background: none;
  text-decoration: none;
  text-align: center;
  margin: 0;
  white-space: nowrap;
  text-overflow:ellipsis;
  text-transform: uppercase;
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
  &:active{
    background: @tap-color;
  }
  i.icon + span,
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

  .ripple-ink{
    color: @tap-color;
  }

  &.color-red{
    color: @red;
  }

  &.color-green{
    color: @green;
  }

  &.color-amber{
    color: @amber;
  }

  &.color-blue{
    color: @blue;
  }
}

.button-fill {
  background-color: @carbon;
  color: #fff;
  .ripple-ink{
    color: rgba(255,255,255,0.4);
  }
  &:active {
    background-color: darken(@carbon, 8%);
  }
  &.color-red{
    color: #fff;
    background-color: @red;
    &:active {
      background-color: darken(@red, 8%);
    }
  }

  &.color-green{
    color: #fff;
    background-color: @green;
    &:active {
      background-color: darken(@green, 8%);
    }
  }

  &.color-amber{
    color: #fff;
    background-color: @amber;
    &:active {
      background-color: darken(@amber, 8%);
    }
  }

  &.color-blue{
    color: #fff;
    background-color: @blue;
    &:active {
      background-color: darken(@blue, 8%);
    }
  }
}

.button-big {
  height: 48px;
  line-height: 48px;
  border-radius: 3px;
}

.button-raised {
  .depth(1);
  html:not(.watch-active-state) &:active, &.active-state {
    .depth(2);
  }
}
</style>
