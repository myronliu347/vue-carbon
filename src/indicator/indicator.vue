<template>
  <div class="vc-indicator" v-show="show">
    <toast center v-if="type === 'toast'">
      <circular :size="36" color="white"></circular>
      <div class="toast-text" v-if="text">{{text}}</div>
    </toast>
    <modal v-if="type === 'modal'" hide-close :overlay="false" show>
      <div class="vc-indicator-modal-content">
        <circular :size="36"></circular>
        <div class="vc-indicator-modal-text" v-if="text">
          {{text}}
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Popup from '../popup'
import toast from '../toast'
import modal from '../modal/modal'
export default {
  mixins: [Popup],
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,   // toast / modal
      default: 'toast'
    },
    overlayOpacity: {
      default: 0.0000001
    }
  },
  components: {
    toast,
    modal
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
.vc-indicator-modal-content{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vc-indicator-modal-text{
  font-size: 16px;
  color: @color;
  margin-top: 12px;
}
</style>
