<template>
  <div class="vc-list">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-list {
  margin: 16px 0;
  &:first-child {
    margin-top: 0;
  }
  width: 100%;
  background: #FFF;
  .hairline(top, @border-color);
  .hairline(bottom, @border-color);
  position: relative;
  .vc-item:last-child{
    .hairline-remove(bottom);
  }
}

</style>
