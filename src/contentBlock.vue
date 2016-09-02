<template>
  <div class="content-block">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import "./utils/_vars.less";
.content-block{
  margin: 16px 0;
  padding: 10px 16px;
  width: 100%;
  color: @body_color;
  p{
    margin-top: 1em;
    margin-bottom: 1em;
    &:first-child{
      margin-top: 0;
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
}
</style>
