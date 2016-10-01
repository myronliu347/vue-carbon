<template>
  <div class="vc-snack-bar">
    <div class="vc-snack-message">
      {{message}}
    </div>
    <vc-button text="action" @click="actionClick" :color="actionColor"></vc-button>
  </div>
</template>

<script>
import button from '../button/button'
export default {
  props: {
    action: {
      type: String
    },
    actionColor: {
      type: String,
      default: 'red'
    },
    message: {
      type: String
    }
  },
  methods: {
    actionClick () {
      this.$emit('action-click')
    }
  },
  components: {
    'vc-button': button
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-snack-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.87);
  padding: 0px 24px;
  min-height: 48px;
}

.vc-snack-message {
  display: flex;
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
}
.vc-snack-bar{
  color: #FFF;
  .vc-button {
    .vc-ripple-ink{
      color: rgba(255, 255, 255, .3);
    }
  }
}
</style>
