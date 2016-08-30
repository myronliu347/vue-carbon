<template>
  <modal :close-on-click-modal="false" :show.sync="show" :title="title">
    <div class="prompt-content" v-el:content>
      <div class="prompt-text">{{msg}}</div>
      <div class="prompt-text-field" :class="{'focus-state': focus, 'not-empty-state': input}">
        <input type="text" v-el:input @focus="this.focus = true" @blur="this.focus = false"
          class="prompt-input" v-model="input">
      </div>
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
    onSure: {
      type: Function
    }
  },
  data () {
    return {
      input: '',
      focus: false
    }
  },
  methods: {
    cancel () {
      this.show = false
      this.$emit('cancel')
    },
    sure () {
      this.show = false
      if (this.onSure) this.onSure(this.input)
      this.$emit('sure', this.input)
    }
  },
  ready () {
    if (this.show) this.$els.input.focus()
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.prompt-content{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.prompt-text-field{
  width: 100%;
  display: block;
  position: relative;
  .hairline(bottom, #d3d6db);
  &:after {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
    transform: translate3d(0, 0, 0);
    transition-duration: 200ms;
  }
  &.focus-state:after,
  &.not-empty-state:after {
    background: @red;
    transform: scaleY(2) !important;
  }
}
.prompt-input{
  appearance: none;
  outline: none;
  box-sizing: border-box;
  border: none;
  background: none;
  border-radius: 0 0 0 0;
  box-shadow: none;
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 36px;
  color: @color;
  font-size: 16px;
  font-family: inherit;
}
</style>
