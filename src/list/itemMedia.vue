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
  img {
    max-width: 40px;
    border-radius: 50%;
  }
}
.item-cell .item-media {
  padding-top: 0;
  padding-bottom: 0;
  + .item-title {
    padding-left: 16px;
  }
}
</style>
