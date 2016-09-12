<template>
  <div class="vc-modal" v-show="show" transition="vc-modal-scale">
    <div class="vc-modal-header" v-if="title">
      <div class="vc-modal-title">
          {{title}}
      </div>
    </div>
    <div class="vc-modal-body">
      <slot>
        <div v-if="msg">
          {{msg}}
        </div>
      </slot>
    </div>
    <div class="vc-modal-footer" v-if="!hideClose">
      <slot name="footer">
        <button text="关闭" @click="close"></button>
      </slot>
    </div>
  </div>
</template>

<script>
import Popup from '../popup'
export default {
  mixins: [Popup],
  props: {
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    clickOverlayClose: {
      type: Boolean,
      default: true
    },
    hideClose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.show = false
    },
    overlayClick () {
      if (this.clickOverlayClose) this.show = false
    }
  }
}
</script>

<style lang="less">
@import "../utils/_mixins.less";
@import "../utils/_vars.less";
.vc-modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  outline: none;
  width: 280px;
  margin: 0px auto;
  padding: 0;
  background-color: white;
  border-radius: 3px;
  .depth(5);
  max-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 16px;
  color: @body_color;
}

.vc-modal-header {
  display: flex;
  align-items: center;
  padding: 24px 24px 20px;
  .vc-modal-title {
    flex: 1;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: normal;
    color: @color;
  }
  + .vc-modal-body{
    padding-top: 0;
  }
}

.vc-modal-body {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 24px;
    padding-bottom: 20px;
}

.vc-modal-footer {
  padding: 6px 8px;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .button-fill,
  .button-raise {
    margin-left: 10px;
  }
}

.vc-modal-scale-transition{
  transition: all .3s ease;
}
.vc-modal-scale-enter,
.vc-modal-scale-leave {
    opacity: 0;
}

.vc-modal-scale-enter {
  transform: translate3d(-50%, -50%, 0) scale(1.1) ;
}
.vc-modal-scale-leave {
  transform: translate3d(-50%, -50%, 0) scale(0.8) ;
}
</style>
