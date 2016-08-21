<template>
  <div class="list">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.list {
  margin: 16px 0;
  &:first-child {
    margin-top: 0;
  }
  width: 100%;
  flex: 1;
  background: #FFF;
  .hairline(top, @border-color);
  .hairline(bottom, @border-color);
  position: relative;
  .item:last-child{
    .hairline-remove(bottom);
  }
}

</style>
