<template>
  <div class="vc-item-divider"><slot></slot></div>
</template>
<style lang="css">
.vc-item-divider{
  background: #f4f4f4;
  padding: 0px 15px;
  white-space: nowrap;
  position: relative;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.54);
  height: 48px;
  box-sizing: border-box;
  line-height: 48px;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
