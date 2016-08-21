<template>
  <div class="button-area">
    <slot></slot>
  </div>
</template>

<style lang="less">
.button-area {
  margin-top: 16px;
  margin-bottom: 32px;
  padding: 0 16px;
  > .button + .button{
    margin-top: 16px;
  }
  width: 100%;
}
</style>
