<template>
  <a href="javascript:;" v-el:action class="card-action">
    <slot></slot>
    <ripple :trigger="$els.action"></ripple>
  </a>
</template>
<script>
import ripple from '../ripple'
export default {
  components: {
    ripple
  }
}
</script>
<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.card-action {
  height: 36px;
  line-height: 36px;
  position: relative;
  color: @color;
  .flex-shrink(0);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .active-highlight(@tap-color);
  border-radius: 2px;
  padding: 0 6px;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  .ripple-ink{
    color: rgba(0, 0, 0, .1);
  }
}
</style>
