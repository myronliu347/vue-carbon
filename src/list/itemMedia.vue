<template>
<div class="vc-item-media">
  <slot></slot>
</div>
</template>

<style lang="less">
.vc-item-media {
  padding-top: 10px;
  padding-bottom: 10px;
  + .vc-item-content{
    padding-left: 16px;
  }
  img {
    max-width: 40px;
    border-radius: 50%;
  }
}
.vc-item-cell .vc-item-media {
  padding-top: 0;
  padding-bottom: 0;
  + .vc-item-title {
    padding-left: 16px;
  }
}
</style>
