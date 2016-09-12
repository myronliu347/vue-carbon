<template>
<a href="javascript:;" class="vc-nav-menu" v-el:menu>
  <div class="vc-nav-menu-icon">
    <icon :value="icon"></icon>
  </div>
  <div class="vc-nav-menu-content">
    <div class="vc-nav-menu-title">
      {{title}}
    </div>
    <div class="vc-nav-menu-after">
      {{after}}
    </div>
  </div>
  <ripple color="rgba(0, 0, 0, .1)" :trigger="$els.menu"></ripple>
</a>
</template>

<script>
import icon from '../icon/icon'
import ripple from '../ripple'
export default {
  props: {
    icon: {
      type: String,
      default: 'brightness_1'
    },
    title: {
      type: String,
      default: ''
    },
    after: {
      type: String,
      default: ''
    }
  },
  components: {
    icon,
    ripple
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";

.vc-nav-menu{
  display: flex;
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  position: relative;
  align-items: center;
  color: @body_color;
  &:active{
    color: @color;
  }
  .active-highlight(@tap-color);
}

.vc-nav-menu-icon{
  width: 40px;
  display: flex;
  align-items: center;
}

.vc-nav-menu-content{
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vc-nav-menu-title{
  font-size: 16px;
  .flex-shrink(10);
}

.vc-nav-menu-after{
  margin-left: auto;
  font-size: 14px;
}
</style>
