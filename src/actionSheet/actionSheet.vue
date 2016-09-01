<template>
  <div class="action-sheet" v-show="show" transition="actionsheet">
    <div class="action-sheet-group">
      <a href="javascript:;" @click="actionClick(action)" v-el:button :class="{ [ action.color ? 'color-' + action.color : '' ]: true, 'action-sheet-label': action.isLabel, 'action-sheet-button': !action.isLabel}" v-for="action in actions">
        {{action.name}}
        <ripple :trigger="$els.button"></ripple>
      </a>
    </div>
    <div class="action-sheet-group" v-if="showCancel">
      <a class="action-sheet-button" v-el:cancel>
        取消
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
.action-sheet{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #FFF;
}
.action-sheet-group {
  position: relative;
  .hairline(bottom, @border-color);
  &:last-child {
    .hairline-remove(bottom);
  }
}
.action-sheet-button,
.action-sheet-label {
  width: 100%;
  font-weight: normal;
  margin: 0;
  display: block;
  position: relative;
  padding: 0 16px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.action-sheet-label {
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

.action-sheet-button{
  cursor: pointer;
  height: 48px;
  line-height: 48px;
  font-size: 16px;
  color: @color;
  .active-highlight(@tap-color);
  .ripple-ink {
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
