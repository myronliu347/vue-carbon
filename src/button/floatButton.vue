<template>
<a href="javascript:;" class="vc-float-button" :class="classNames" v-el:button>
  <icon :value="icon"></icon>
  <ripple color="rgba(255, 255, 255, .3)" :trigger="$els.button"></ripple>
</a>
</template>

<script>
import icon from '../icon/icon'
import ripple from '../ripple'
export default {
  props: {
    icon: {
      type: String,
      default: 'add'
    },
    fixed: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  components: {
    icon,
    ripple
  },
  computed: {
    classNames () {
      let className = {}
      className['vc-float-button-' + this.color] = true
      className['vc-float-button-fixed'] = this.fixed
      return className
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";

.vc-float-button{
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 56px;
  height: 56px;
  background-color: @color;
  border: none;
  appearance: none;
  text-decoration: none;
  margin: 0;
  outline: 0;
  transition-duration: 300ms;
  transform: translate3d(0, 0, 0);
  border-radius: 50%;
  color: #FFF;
  .flex-shrink(0);
  .depth(2);
  &:active {
    .depth(3);
  }
  .active-highlight()
}

.vc-float-button-fixed{
  position: fixed;
  right: 16px;
  bottom: 16px;
}

.vc-float-button-carbon{
  background-color: @color;
}

.vc-float-button-red{
  background-color: @red;
}

.vc-float-button-green{
  background-color: @green;
}

.vc-float-button-blue{
  background-color: @blue;
}

.vc-float-button-amber{
  background-color: @amber;
}
</style>
