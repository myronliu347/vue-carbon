<template>
<div class="range">
  <input type="range" :step="step" :min="min" :max="max" v-model="value">
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
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
.range {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 36px;
  display: flex;
  align-items: center;
  input[type="range"] {
    position: relative;
    height: 20px;
    width: 100%;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: -webkit-gradient(linear, 50% 0, 50% 100%, color-stop(0, #b9b9b9), color-stop(100%, #b9b9b9));
    background: linear-gradient(to right, #b9b9b9 0, #b9b9b9 100%);
    background-position: center;
    background-size: 100% 2px;
    background-repeat: no-repeat;
    outline: 0;
    -ms-background-position-y: 500px;
    &:active,
    &:focus {
      border: 0;
      outline: 0 none;
    }
  }
  // Range thumb mixin
  .range-thumb() {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    border: none;
    outline: 0;
    height: 20px;
    width: 20px;
    position: relative;
    background: @red;
    border-radius: 20px;
  }
  // ======= Webkit ========
  input[type="range"]::-webkit-slider-thumb {
    .range-thumb();
  }

  input[type="range"]::-webkit-slider-thumb:before {
    position: absolute;
    top: 50%;
    right: 100%;
    width: 2000px;
    height: 2px;
    margin-top: -1px;
    z-index: 1;
    background: @red;
    content: ' ';
  }
  // ======= FireFox ========
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 2px;
    background: #b7b8b7;
    border: none;
    outline: 0;
  }
  input[type="range"]::-moz-range-thumb {
    .range-thumb();
  }
  // ======= IE ========
  input[type="range"]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-thumb {
    .range-thumb();
  }
  input[type="range"]::-ms-fill-lower {
    background: @red;
  }
  input[type="range"]::-ms-fill-upper {
    background: #b7b8b7;
  }
}

</style>
