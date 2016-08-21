<template>
  <div class="buttons-row">
    <slot></slot>
  </div>
</template>

<style lang="less">
.buttons-row {
  align-self: center;
  display: flex;
  margin: 1em 0;
  .button {
    margin-left: 16px;
    width: 100%;
    flex: 1;
  }
  .button:first-child {
    margin-left: 0;
  }
}
</style>
