<template>
  <em class="vc-badge" :class="classNames">
    <slot>
      {{value}}
    </slot>
  </em>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    classNames () {
      let obj = {}
      obj['vc-badge-' + this.color] = true
      return obj
    }
  }
}
</script>

<style lang="less">
@import "./utils/_vars.less";
.vc-badge{
  font-size: 10px;
  display: inline-block;
  font-style: normal;
  color:#fff;
  background-color: #bbbfc4;
  padding: 3px 6px;
  border-radius: 3px;
  line-height: normal;
}

.icon .vc-badge {
  position: absolute;
  left: 100%;
  margin-left: -10px;
  padding: 1px 6px;
  top: -2px;
  line-height: normal;
  border-radius: 10px;
}

.vc-badge-carbon{
  background-color: @carbon;
}

.vc-badge-red{
  background-color: @red;
}

.vc-badge-green{
  background-color: @green;
}

.vc-badge-amber{
  background-color: @amber;
}

.vc-badge-blue{
  background-color: @blue;
}

</style>
