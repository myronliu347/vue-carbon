<template>
  <div class="vc-action-sheet" v-show="show" transition="actionsheet">
    <div class="vc-action-sheet-group">
      <a href="javascript:;" @click="actionClick(action)"  v-el:button :class="['color-' + action.color, action.isLabel ? 'vc-action-sheet-label' : 'vc-action-sheet-button']" v-for="action in actions">
        {{action.name}}
        <ripple :trigger="$els.button"></ripple>
      </a>
    </div>
    <div class="vc-action-sheet-group" v-if="showCancel">
      <a class="vc-action-sheet-button" href="javascript:;" @click="cancel"  v-el:cancel>
        {{cancelText}}
        <ripple :trigger="$els.cancel"></ripple>
      </a>
    </div>
  </div>
</template>

<script>
import ripple from '../ripple'
import Popup from '../popup'
export default {
  mixins: [Popup],
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    clickOverlayClose: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cancel () {
      this.show = false
    },
    overlayClick () {
      if (this.clickOverlayClose) this.show = false
    },
    actionClick (action) {
      if (!action.isLabel && action.click) {
        action.click()
      }
      this.show = false
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
.vc-action-sheet{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFF;
  max-height: 70%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.vc-action-sheet-group {
  position: relative;
  .hairline(bottom, @border-color);
  &:last-child {
    .hairline-remove(bottom);
  }
}
.vc-action-sheet-button,
.vc-action-sheet-label {
  width: 100%;
  font-weight: normal;
  margin: 0;
  display: flex;
  position: relative;
  padding: 0 16px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.vc-action-sheet-label {
  font-size: 14px;
  line-height: 1;
  min-height: 57px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: @body_color;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .hairline(top, @border-color);
  &:first-child{
    .hairline-remove(top);
  }
}

.vc-action-sheet-button{
  cursor: pointer;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: @color;
  .active-highlight(@tap-color);
  .vc-ripple-ink {
    color: @tap-color;
  }
  &.color-red{
    color: @red;
  }
  &.color-green{
    color: @green;
  }
  &.color-amber{
    color: @amber;
  }
  &.color-blue{
    color: @blue;
  }
}

.actionsheet-transition{
  transition: transform .3s;
  &.actionsheet-enter,&.actionsheet-leave{
    transform: translate3d(0, 100%, 0);
  }
}
</style>
