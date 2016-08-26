<template>
  <div class="refresh-control" :style="refreshStyle" :class="{'refresh-control-refreshing': refreshing}">
    <icon v-show="!refreshing && draging" value="refresh" :style="circularStyle"></icon>
    <circular v-show="refreshing" :size="20" :border-width="2"></circular>
  </div>
</template>

<script>
import Drag from './utils/drag'
import icon from './icon/icon'
import circular from './circular'
import * as domUtil from './utils/domUtil'
import classList from './utils/classList'

const LENGTH = 130 // 下拉最大长度
const INITY = -63  // 初始化Y轴位置
export default {
  props: {
    refreshing: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: window.Element,
      default () {
        return document
      }
    }
  },
  data () {
    return {
      y: 0,
      draging: false
    }
  },
  computed: {
    refreshStyle () {
      let style = {}
      if (!this.refreshing && this.draging) {
        let translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) '
        style['-webkit-transform'] = style['transform'] = translate3d
      }
      return style
    },
    circularStyle () {
      let style = {}
      if (!this.refreshing && this.draging) {
        let percentage = this.y / LENGTH
        let rotate = 'rotate(' + (360 * percentage) + 'deg)'
        let opacity = this.y / Math.abs(INITY)
        style['-webkit-transform'] = style['transform'] = rotate
        style['opacity'] = opacity
      }
      return style
    }
  },
  attached () {
    const drager = this.drager = new Drag(this.trigger)
    classList.remove(this.$el, 'refresh-control-noshow')
    const initTop = domUtil.getOffset(this.$el).top + INITY  // 初始化位置
    classList.add(this.$el, 'refresh-control-noshow')
    drager.start(() => {
      if (this.refreshing) return
      classList.add(this.$el, 'refresh-control-hide')
      classList.remove(this.$el, 'refresh-control-noshow')

      let top = domUtil.getOffset(this.$el).top
      if (top === initTop) this.draging = true
    }).drag((pos, event) => {
      if (pos.y < 5) return // 消除误差
      let top = domUtil.getOffset(this.$el).top
      if (this.refreshing || !initTop || top < initTop) {
        this.draging = false
        return
      }

      if (top === initTop && !this.draging) {
        this.draging = true
        drager.reset(event)
      }

      if (this.draging && pos.y > 0) {
        event.preventDefault()
        event.stopPropagation()
      }

      this.y = pos.y
      if (this.y < 0) this.y = 1
      if (this.y > LENGTH) this.y = LENGTH
    }).end((pos, event) => {
      if (!pos.y || pos.y < 5) {
        this.clearState()
        return // 消除误差
      }
      let canRefresh = pos.y + INITY > 0 && this.draging
      classList.add(this.$el, 'refresh-control-animate')
      if (canRefresh) {
        this.draging = false
        this.$emit('refresh')
      } else {
        this.y = 0
        domUtil.transitionEnd(this.$el, this.clearState.bind(this))
      }
    })
  },
  detached () {
    this.drager.destory()
    this.drager = null
  },
  methods: {
    clearState () {
      classList.remove(this.$el, 'refresh-control-animate')
      classList.remove(this.$el, 'refresh-control-hide')
      classList.add(this.$el, 'refresh-control-noshow')
      this.draging = false
      this.y = 0
    }
  },
  watch: {
    refreshing (val) {
      if (!val) {
        domUtil.transitionEnd(this.$el, this.clearState.bind(this))
      } else {
        classList.add(this.$el, 'refresh-control-animate')
        classList.remove(this.$el, 'refresh-control-hide')
        classList.add(this.$el, 'refresh-control-noshow')
      }
    }
  },
  components: {
    icon,
    circular
  }
}
</script>

<style lang="less">
@import "./utils/_mixins.less";
@import "./utils/_vars.less";
.refresh-control{
  display: flex;
  margin: 0 auto;
  width: 36px;
  height: 36px;
  color: @red;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 50%;
  .depth(2);
  position: absolute;
  left: 50%;
  margin-left: -18px;
  margin-top: 24px;
  z-index: 100;
}

.refresh-control-animate{
   transition: all 0.3s ease;
}

.refresh-control-hide{
  opacity: 1;
  transform: translate3d(0, -63px, 0);
}

.refresh-control-noshow{
  opacity: 0;
  transform: scale(0.01);
}

.refresh-control-refreshing {
  transform: scale(1);
  opacity: 1;
}
</style>
