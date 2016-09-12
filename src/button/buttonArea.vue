<template>
  <div class="vc-button-area">
    <slot></slot>
  </div>
</template>

<style lang="less">
.vc-button-area {
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 0 16px;
  > .vc-button + .vc-button{
    margin-top: 16px;
  }
  width: 100%;
}
</style>
