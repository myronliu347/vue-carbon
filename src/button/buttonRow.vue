<template>
  <div class="vc-buttons-row">
    <slot></slot>
  </div>
</template>

<style lang="less">
.vc-buttons-row {
  align-self: center;
  display: flex;
  margin: 1em 0;
  .vc-button {
    margin-left: 16px;
    width: 100%;
    flex: 1;
  }
  .vc-button:first-child {
    margin-left: 0;
  }
}
</style>
