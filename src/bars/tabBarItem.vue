<template>
<a href="javascript:;" class="vc-tab-link" v-el:tablink :class="{'active': show}" @click="tabClick()">
  <slot></slot>
  <ripple :trigger="$els.tablink"></ripple>
</a>
</template>

<script>
import ripple from '../ripple'
export default {
  data () {
    return {
      index: -1,
      show: false
    }
  },
  computed: {
    show () {
      return (this.$parent.active === this.index)
    }
  },
  methods: {
    tabClick () {
      this.$emit('tabbar-click', this.index, this.link)
    }
  },
  created () {
    this.$parent.renderData.push({
      title: this.title,
      active: false
    })
  },
  ready () {
    let children = this.$parent.$children
    for (let i = 0; i < children.length; i++) {
      if (children[i].$el === this.$el) {
        this.index = i
        break
      }
    }
  },
  components: {
    ripple
  }
}
</script>

<style lang="less">
@import "../utils/_mixins.less";
.vc-tab-link{
  flex: 1;
  width: 100%;
  height: 100%;
  color: #FFF;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .active-highlight();
  .vc-ripple-ink{
    color: rgba(255, 255, 255, .3);
  }
}
</style>
