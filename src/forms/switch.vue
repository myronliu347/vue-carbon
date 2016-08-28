<template>
<label class="switch" :class="{'label-left': labelLeft}">
  <input type="checkbox" v-model="value">
  <div class="switch-checkbox"></div>
  <div class="switch-label" v-if="label">{{label}}</div>
</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    labelLeft: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      this.$emit('input-change', this.value)
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.switch{
  height: 36px;
  position: relative;
  display: inline-flex;
  margin-right: 32px;
  align-items: center;
  color: @body_color;
  input[type="checkbox"] {
    display: none;
    &:checked {
      +.switch-checkbox {
        background: rgba(red(@red), green(@red), blue(@red), 0.5);
        &:after {
          .transform(translateX(16px));
          background: @red;
        }
      }
    }
  }
  * {
    pointer-events: none;
  }

  &.label-left{
    .switch-checkbox{
      order: 1
    }

    .switch-label {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  &:last-child{
    margin-right: 0;
  }
}
.switch-label{
  font-size: 16px;
  color: @color;
  margin-left: 8px;
  margin-right: auto;
}
.switch-checkbox {
  width: 36px;
  border-radius: 36px;
  height: 14px;
  background: #b0afaf;
  z-index: 0;
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  position: relative;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
  transition-duration: 300ms;
  &:after {
    content: ' ';
    height: 20px;
    width: 20px;
    border-radius: 20px;
    background: #fff;
    position: absolute;
    z-index: 2;
    top: -3px;
    left: 0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.4);
    transform: translateX(0);
    transition-duration: 300ms;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
  }
}
</style>
