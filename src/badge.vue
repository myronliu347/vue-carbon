<template>
  <em class="badge" :class="classNames">
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
      obj['badge-' + this.color] = true
      return obj
    }
  }
}
</script>

<style lang="less">
@import "./utils/_vars.less";
.badge{
  font-size: 10px;
  display: inline-block;
  font-style: normal;
  color:#fff;
  background-color: #bbbfc4;
  padding: 3px 6px;
  border-radius: 3px;
  line-height: normal;
}

.icon .badge {
  position: absolute;
  left: 100%;
  margin-left: -10px;
  padding: 1px 6px;
  top: -2px;
  line-height: normal;
  border-radius: 10px;
}

.badge-carbon{
  background-color: @carbon;
}

.badge-red{
  background-color: @red;
}

.badge-green{
  background-color: @green;
}

.badge-amber{
  background-color: @amber;
}

.badge-blue{
  background-color: @blue;
}

</style>
