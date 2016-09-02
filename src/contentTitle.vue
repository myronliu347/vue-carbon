<template>
  <div class="content-title">
    <slot></slot>
  </div>
</template>

<style lang="less">
.content-title {
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 16px;
  margin: 16px 16px 16px;
  padding-top: 16px;
  font-weight: 500;
  + .list, + .content-block, +.card {
    margin-top: 0px;
  }
}
</style>
