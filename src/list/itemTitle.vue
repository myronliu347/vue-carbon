<template>
  <div class="item-title">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "../utils/_vars.less";
.item-title{
  flex: 1;
  color: @color;
  overflow: hidden;
  display: block;
  font-size: 16px;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  max-width: 100%;
  text-transform: capitalize;
}
</style>
