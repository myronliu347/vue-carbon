<template>
  <div class="item-text">
    <slot></slot>
  </div>
</template>

<style lang="css">
.item-text{
  font-size: 14px;
  line-height: 20px;
  max-height: 40px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
}
</style>
