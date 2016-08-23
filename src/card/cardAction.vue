<template>
  <a href="javascript:;" class="card-action">
    <slot></slot>
  </a>
</template>

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
  padding: 0 8px;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
}
</style>
