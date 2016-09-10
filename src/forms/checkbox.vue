<template>
  <label class="checkbox" :class="{'label-left': labelLeft}">
    <input type="checkbox" :name="name" :value="value" v-model="model">
    <div class="checkbox-label"  v-if="label && labelLeft">{{label}}</div>
    <div class="checkbox-icon"></div>
    <div class="checkbox-label"  v-if="label && !labelLeft">{{label}}</div>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    model: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    label: {
      type: String,
      default: ''
    },
    labelLeft: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      this.$emit('input-change', this.model)
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.checkbox {
  position: relative;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  margin-right: 32px;
  input[type="checkbox"] {
    display: none;
    &:checked {
      + .checkbox-icon,
      + .checkbox-label + .checkbox-icon{
        border-color: @red;
        background-color: @red;
        &:after{
          opacity: 1;
        }
      }
    }
  }
  * {
    pointer-events: none;
  }
  &.label-left{
    .checkbox-label {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  &:last-child{
    margin-right: 0;
  }
}

.checkbox-icon {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  border-color: @body_color;
  background: transparent;
  transition-duration: 300ms;
  &:after {
    left: 50%;
    top: 50%;
    margin-left: -3px;
    margin-top: -7px;
    width: 6px;
    height: 13px;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity .3s ease;
    transition-delay: .1s;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    box-sizing: border-box;
    position: absolute;
    display: block;
    content: "";
  }
}

.checkbox-label{
  color: @color;
  font-size: 16px;
  margin-left: 8px;
  margin-right: auto;
}

.checkbox-icon,
.checkbox-label {
  display: inline-block;
  vertical-align: middle;
}
</style>
