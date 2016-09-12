<template>
  <modal :click-overlay-close="false" :show.sync="show" :title="title">
    <div class="vc-confirm-content">
      <icon value="help_outline" v-if="showIcon" :size="36"></icon>
      <span class="vc-confirm-text">{{msg}}</span>
    </div>
    <button slot="footer" text="取消" @click="cancel"></button>
    <button slot="footer" text="确定" @click="sure"></button>
  </modal>
</template>

<script>
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
    showIcon: {
      type: Boolean,
      default: false
    },
    onSure: {
      type: Function
    },
    onCancel: {
      type: Function
    }
  },
  methods: {
    cancel () {
      this.show = false
      if (this.onCancel) this.onCancel()
      this.$emit('cancel')
    },
    sure () {
      this.show = false
      if (this.onSure) this.onSure()
      this.$emit('sure')
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
.vc-confirm-content{
  display: flex;
  .icon {
    color: @blue;
  }
}

.vc-confirm-text{
  display: flex;
  align-items: center;
}

.vc-confirm-content .icon + .vc-confirm-text{
  margin-left: 12px;
}
</style>
