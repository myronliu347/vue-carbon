<template>
<div class="vc-popover" v-show="show" :style="{'top': pos.top + 'px', 'left': pos.left + 'px'}"
  :class="{'vc-popover-top': pos.position === 'top', 'vc-popover-bottom': pos.position === 'bottom'}"
  transition="vc-popover">
  <div class="vc-popover-content">
    <slot></slot>
  </div>
</div>
</template>
<script>
import Popup from '../popup'
import * as domUtil from '../utils/domUtil'
export default {
  mixins: [Popup],
  props: {
    trigger: {
      type: [Array, window.Element],
      default () {
        return []
      }
    }
  },
  data () {
    return {
      pos: {
        left: 0,
        top: 0,
        position: 'top'
      }
    }
  },
  ready () {
    const display = this.$el.style.display
    this.$el.style.display = ''
    this.ctWw = this.$el.offsetWidth
    this.ctWh = this.$el.offsetHeight
    this.$el.style.display = display
  },
  attached () {
    this.hanlderOpen = (e) => this.open(e)
    if (this.trigger instanceof window.Element) {
      this.trigger.addEventListener('click', this.hanlderOpen, false)
    } else {
      this.trigger.forEach((el) => {
        el.addEventListener('click', this.hanlderOpen, false)
      })
    }
  },
  detached () {
    if (this.trigger instanceof window.Element) {
      this.trigger.removeEventListener('click', this.hanlderOpen, false)
    } else {
      this.trigger.forEach((el) => {
        el.removeEventListener('click', this.hanlderOpen, false)
      })
    }
  },
  methods: {
    open (e) {
      const el = e.target
      this.show = true
      this.pos = this.computePos(this.getEleInfo(el))
    },
    getEleInfo (el) {
      let offset = domUtil.getOffset(el)
      return {
        left: offset.left,
        top: offset.top,
        width: el.offsetWidth,
        height: el.offsetHeight
      }
    },
    computePos (elInfo) {
      const space = 16
      let position = 'bottom'
      let left = elInfo.left
      let top = elInfo.top
      const ww = window.innerWidth
      const wh = window.innerHeight
      const ctWw = this.ctWw
      const ctWh = this.ctWh
      if (wh - elInfo.top - space < ctWh) {
        position = 'top'
        top = elInfo.top + elInfo.height - ctWh
      }

      if (ww - elInfo.left - space < ctWw) {
        left = elInfo.left + elInfo.width - ctWw
      }
      return {
        position: position,
        left: left,
        top: top
      }
    },
    overlayClick () {
      this.show = false
    }
  }
}
</script>

<style lang="less">
@import "../utils/_mixins.less";
.vc-popover{
  position: fixed;
  background: #FFF;
  max-width: 300px;
  min-width: 200px;
  border-radius: 3px;
  .depth(1);
  &.vc-popover-bottom {
    transform-origin: center top;
  }
  &.vc-popover-top{
    transform-origin: center bottom;
  }
}

.vc-popover-content{
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  max-height: 70%;
  border-radius: 3px;
}

.vc-popover-transition{
  transition-duration: 300ms;
  transition-property: opacity, transform;
  &.vc-popover-enter {
    transform: scale(0);
    opacity: 0;
  }
  &.vc-popover-leave {
    opacity: 0;
  }
}

</style>
