<template>
<div class="card-content">
  <div class="card-content-inner">
    <slot></slot>
  </div>
</div>
</template>

<style lang="less">
@import "../utils/_vars.less";
.card-content{
  position: relative;
}
.card-content-inner{
  padding: 16px;
  position: relative;
  color: @body_color;
  > p:first-child {
      margin-top: 0;
  }
  > p:last-child {
      margin-bottom: 0;
  }
  > .list,
  >.content-block {
      margin: -15px;
      width: auto;
  }
}
</style>
