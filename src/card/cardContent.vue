<template>
<div class="vc-card-content">
  <div class="vc-card-content-inner">
    <slot></slot>
  </div>
</div>
</template>

<style lang="less">
@import "../utils/_vars.less";
.vc-card-content{
  position: relative;
}
.vc-card-content-inner{
  padding: 16px;
  position: relative;
  color: @body_color;
  > p:first-child {
      margin-top: 0;
  }
  > p:last-child {
      margin-bottom: 0;
  }
  > .vc-list,
  > .vc-content-block {
      margin: -15px;
      width: auto;
  }
}
</style>
