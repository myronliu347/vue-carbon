<template>
  <modal :close-on-click-modal="false" :show.sync="show" :title="title">
    <div class="alert-content" :class="{'info': type === 'info',
                                        'warning': type === 'warning',
                                        'success': type === 'success',
                                        'error': type === 'error'}">
      <icon :value="type === 'success' ? 'check' : type" v-if="type" :size="36"></icon>
      <span class="alert-text">{{msg}}</span>
    </div>
    <button slot="footer" text="确定" @click="sure"></button>
  </modal>
</template>

<script>
import modal from './modal'
import button from '../button/button'
import icon from '../icon/icon'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '' // 'info', 'success', 'warning', 'error'
    },
    onSure: {
      type: Function
    }
  },
  methods: {
    sure () {
      this.show = false
      if (this.onSure) this.onSure()
      this.$emit('sure')
    }
  },
  components: {
    modal,
    button,
    icon
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
.alert-content{
  display: flex;
}
.alert-text{
  display: flex;
  align-items: center;
}

.alert-content .icon + .alert-text{
  margin-left: 12px;
}

.alert-content.info .icon{
  color: @blue;
}

.alert-content.success .icon{
  color: @green;
}

.alert-content.warning .icon{
  color: @amber;
}

.alert-content.error .icon{
  color: @red;
}
</style>
