<template>
<div class="item-media">
  <slot></slot>
</div>
</template>

<style lang="less">
.item-media {
  padding-top: 10px;
  padding-bottom: 10px;
  + .item-content{
    padding-left: 16px;
  }
}
</style>
