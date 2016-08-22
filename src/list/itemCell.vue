<template>
  <a href="javascript:;" class="item item-cell" :class="{'item-link': link}">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.item-cell{
  padding: 10px 16px;
  display: flex;
  align-items: center;
}

.item-cell.item-link{
  .encoded-svg-background("<svg viewBox='0 0 60 120' xmlns='http://www.w3.org/2000/svg'><path d='m60 61.5-38.25 38.25-9.75-9.75 29.25-28.5-29.25-28.5 9.75-9.75z' fill='#989da3'/></svg>");
  background-size: 10px 20px;
  background-repeat: no-repeat;
  background-position: 95% center;
  padding-right: 42px;
}
</style>
