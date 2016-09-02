<template>
  <label class="checkbox" :class="{'label-left': labelLeft}">
    <input type="checkbox" :name="name" :value="value" v-model="model">
    <div class="checkbox-icon"></div>
    <div class="checkbox-label"  v-if="label">{{label}}</div>
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
  display: inline-flex;
  height: 36px;
  margin-right: 32px;
  align-items: center;
  input[type="checkbox"] {
    display: none;
    &:checked + .checkbox-icon{
      border-color: @red;
      background-color: @red;
      &:after{
        opacity: 1;
      }
    }
  }
  * {
    pointer-events: none;
  }
  &.label-left{
    .checkbox-icon{
      order: 1
    }

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border-width: 2px;
  border-style: solid;
  border-color: @body_color;
  background: transparent;
  transition-duration: 300ms;
  &:after {
    content:' ';
    display: block;
    width: 18px;
    height: 18px;
    transition-duration: 300ms;
    opacity: 0;
    background: no-repeat center;
    .encoded-svg-background("<svg xmlns='http://www.w3.org/2000/svg' fill='#ffffff' width='24' height='24' viewBox='0 0 24 24'><path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>");
    background-size: 18px;
  }
}

.checkbox-label{
  color: @color;
  font-size: 16px;
  margin-left: 8px;
  margin-right: auto;
}
</style>
