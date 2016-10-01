<template>
  <div class="vc-bottom-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      renderData: []
    }
  },
  methods: {
    handlerClick (index) {
      this.$emit('nav-change', index)
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-bottom-nav{
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF;
  color: @carbon;
  text-align: center;
  font-size: 18px;
  position: relative;
  width: 100%;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
}

</style>
