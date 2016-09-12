<template>
  <div class="vc-item-title-after">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-item-title-after{
  .flex-shrink(0);
  font-size: 14px;
  color: @body_color;
  display: block;
}
</style>
