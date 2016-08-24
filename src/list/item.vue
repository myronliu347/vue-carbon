<template>
<a href="javascript:;" class="item" v-el:item :class="{'item-link': link}">
  <slot></slot>
  <ripple :trigger="$els.item"></ripple>
</a>
</template>

<script>
import ripple from '../ripple'
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ripple
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.item{
  .hairline(bottom, @border-color);
  .active-highlight(@tap-color);
  position: relative;
  overflow: hidden;
  padding-left: 16px;
  min-height: 48px;
  color: @body_color;
  display: flex;
  .ripple-ink {
    color: rgba(0, 0, 0, .1);
  }
}

.item-link .item-content {
  .encoded-svg-background("<svg viewBox='0 0 60 120' xmlns='http://www.w3.org/2000/svg'><path d='m60 61.5-38.25 38.25-9.75-9.75 29.25-28.5-29.25-28.5 9.75-9.75z' fill='#989da3'/></svg>");
  background-size: 10px 20px;
  background-repeat: no-repeat;
  background-position: 95% center;
  padding-right: 42px;
}
</style>
