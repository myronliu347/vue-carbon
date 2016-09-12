<template>
<div class="vc-card-footer">
  <slot></slot>
</div>
</template>
<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-card-footer{
  min-height: 48px;
  position: relative;
  padding: 4px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hairline(top, @border-color);
  border-radius: 0 0 2px 2px;
  color: #757575;
}

.vc-card-footer{
  &.no-border {
    .hairline-remove(top);
  }
}
</style>
