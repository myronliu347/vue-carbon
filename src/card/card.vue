<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.card .list {
  .hairline-remove(top);
  .hairline-remove(bottom);
}
.card {
  background: #fff;
  margin: 8px;
  position: relative;
  border-radius: 2px;
  .depth(1);
}
</style>
