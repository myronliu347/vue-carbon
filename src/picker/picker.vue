<template>
<div class="picker-content">
  <picker-slot :divider="slot.divider" :content="slot.content"  :text-align="slot.textAlign" :width="slot.width" v-for="slot in slots" @slot-select="change($index, $arguments)" :value="values[$index]" :values="slot.values" :visible-item-count="visibleItemCount"></picker-slot>
  <div class="picker-center-highlight"></div>
</div>
</template>

<script>
import pickerSlot from './picker-slot'
export default {
  props: {
    visibleItemCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default () {
        return []
      }
    },
    slots: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    change (index, args) {
      this.values[index] = args[0]
      this.$emit('picker-change', this.values)
    },
    sure () {
      this.$emit('picker-sure', this.values)
    }
  },
  components: {
    'picker-slot': pickerSlot
  }
}
</script>
<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.picker-content{
  background: #FFF;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  -webkit-mask-box-image: -webkit-linear-gradient(bottom, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);
}

.picker-center-highlight {
    height: 36px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -18px;
    pointer-events: none;
    .hairline(top, #d3d6db);
    .hairline(bottom, #d3d6db );
}

.picker-center-highlight:before {
    left: 0;
    top: 0;
    bottom: auto;
    right: auto;
}

.picker-center-highlight:after {
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
}
</style>
