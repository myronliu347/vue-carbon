<template>
  <div class="item-content">
    <slot></slot>
  </div>
</template>

<style lang="css">
.item-content {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-self: stretch;
  flex-direction: column;
  position: relative;
  width: 100%;
}
</style>
