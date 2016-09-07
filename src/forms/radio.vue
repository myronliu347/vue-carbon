<template>
  <label class="radio" :class="{'label-left': labelLeft}">
    <input type="radio" :name="name" :value="value" v-model="model">
    <div class="radio-icon"></div>
    <div class="radio-label" v-if="label">{{label}}</div>
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
      type: String,
      required: true,
      default: ''
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
.radio {
  position: relative;
  display: flex;
  height: 36px;
  align-items: center;
  margin-right: 32px;
  input[type="radio"] {
    display: none;
    &:checked + .radio-icon{
      border-color: @red;
      &:after{
        transform: scale(1);
      }
    }
  }
  * {
    pointer-events: none;
  }
  &.label-left{
    .radio-icon{
      order: 1
    }

    .radio-label {
      margin-left: 0;
      margin-right: 8px;
    }
  }

  &:last-child{
    margin-right: 0;
  }
}

.radio-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 36px;
  border-width: 2px;
  border-style: solid;
  border-color: @body_color;
  background: transparent;
  transition-duration: 300ms;
  &:after {
    content:' ';
    display: block;
    width: 10px;
    height: 10px;
    background-color: @red;
    border-radius: 100%;
    transform: scale(0);
    transition-duration: 300ms;
  }
}

.radio-label{
  color: @color;
  font-size: 16px;
  margin-left: 8px;
  margin-right: auto;
}
</style>
