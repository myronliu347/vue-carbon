<template>
<a href="javascript:;" class="nav-menu" v-el:menu>
  <div class="nav-menu-icon">
    <icon :value="icon"></icon>
  </div>
  <div class="nav-menu-content">
    <div class="nav-menu-title">
      {{title}}
    </div>
    <div class="nav-menu-after">
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

.nav-menu{
  display: flex;
  width: 100%;
  line-height: 48px;
  height: 48px;
  padding: 10px 16px;
  position: relative;
  color: @body_color;
  &:active{
    color: @color;
  }
  .active-highlight(@tap-color);
}

.nav-menu-icon{
  width: 40px;
  display: flex;
  align-items: center;
}

.nav-menu-content{
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu-title{
  font-size: 16px;
  .flex-shrink(10);
}

.nav-menu-after{
  margin-left: auto;
  font-size: 14px;
}
</style>
