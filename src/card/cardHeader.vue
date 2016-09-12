<template>
<div class="vc-card-header">
  <slot></slot>
</div>
</template>
<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-card-header{
  border-radius: 2px 2px 0 0;
  font-size: 18px;
  .hairline(bottom, @border-color);
  min-height: 48px;
  position: relative;
  padding: 4px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .vc-card-title{
    color: @color;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden; word-wrap:
    break-word;
    flex: 1;
  }
}

</style>
