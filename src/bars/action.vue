<template>
  <div class="link" v-el:button>
    <slot></slot>
    <ripple :trigger="$els.button"></ripple>
  </div>
</template>
<script>
import ripple from '../ripple'
export default {
  components: {
    ripple
  }
}
</script>
<style lang="less">
  .link {
    position: relative;
    .ripple-ink {
      color: rgba(255, 255, 255, 0.3);
    }
  }
</style>
