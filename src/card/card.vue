<template>
  <div class="vc-card">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-card .vc-list {
  .hairline-remove(top);
  .hairline-remove(bottom);
}
.vc-card {
  background: #fff;
  margin: 8px;
  position: relative;
  border-radius: 2px;
  .depth(1);
}
</style>
