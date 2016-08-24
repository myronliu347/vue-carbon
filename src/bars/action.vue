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
<style media="screen">
  .link {
    position: relative;
  }
</style>
