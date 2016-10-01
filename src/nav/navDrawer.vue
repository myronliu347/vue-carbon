<template>
<div class="vc-nav-drawer" v-show="show" transition="slider-left">
  <div class="vc-nav-drawer-header">
    <slot name="header"></slot>
  </div>
  <div class="vc-nav-drawer-content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import Popup from '../popup'
export default {
  mixins: [Popup],
  methods: {
    overlayClick () {
      this.show = false
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";

.vc-nav-drawer{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  -webkit-overflow-scrolling: touch;
}
.vc-nav-drawer-header{
  background-color: @body_color;
  color: #FFF;
  width: 100%;
  display: flex;
  padding: 16px 16px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.vc-nav-drawer-content{
  width: 100%;
  flex: 1;
  background-color: #FFF;
  padding-top: 10px;
  color: @body_color;
}

.slider-left-transition{
  transition: transform .3s;
  backface-visibility: hidden;
  &.slider-left-enter,
  &.slider-left-leave{
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
