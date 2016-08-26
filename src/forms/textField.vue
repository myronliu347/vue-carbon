<template>
  <div class="text-field" :class="{'focus-state': focus, 'not-empty-state': value}">
    <div class="text-field-icon" v-if="icon">
      <icon :value="icon"></icon>
    </div>
    <div class="text-field-content">
      <label class="text-field-label">
        <div :class="{'text-field-label-text': !labelFloat, 'text-field-floating-label': labelFloat}" v-if="label">{{label}}</div>
        <input :type="type" v-model="value" class="text-field-input" @focus="onfocus" @blur="onblur"
          v-if="type !== 'textarea'"  autocomplete="off" :placeholder="placeholder" />
        <textarea  v-model="value" @focus="onfocus" @blur="onblur"
            :style="{'height': height + 'px'}" v-el:textarea
            class="resizable text-field-input"
            v-if="type === 'textarea'" @focus="this.focus = true"
            @blur="this.focus = false"  v-model="value"
            :placeholder="placeholder">
        </textarea>
      </label>
    </div>
  </div>
</template>

<script>
import icon from '../icon/icon'
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    labelFloat: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    focus: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 1
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      height: 0
    }
  },
  attached () {
    this.resizeTextarea()
  },
  methods: {
    resizeTextarea () {
      let element = this.$els.textarea
      if (!element) return
      let lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height')
      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')))
      let pt = window.getComputedStyle(element, null).getPropertyValue('padding-top')
      pt = Number(pt.substring(0, pt.indexOf('px')))
      let pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom')
      pd = Number(pd.substring(0, pd.indexOf('px')))
      let line = this.getLineNum(this.value)
      line = line > this.rows ? line : this.rows
      let height = pd + pt + lineHeight * line
      this.height = height
    },
    getLineNum (value, line) {
      line = line || 0
      line++
      if (!value || value.indexOf('\n') === -1) return line
      let num = value.indexOf('\n')
      return this.getLineNum(value.substring(num + 1), line)
    },
    onfocus () {
      this.focus = true
    },
    onblur () {
      this.focus = false
    }
  },
  ready () {
    this.resizeTextarea()
  },
  watch: {
    value () {
      this.resizeTextarea()
      this.$emit('input-change', this.value)
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.text-field{
  position: relative;
  overflow: hidden;
  padding-left: 16px;
  min-height: 48px;
  color: #7e848c;
  font-size: 14px;
  display: flex;
  &.focus-state,
  &.not-empty-state {
    .text-field-floating-label {
      transform: scale(1) translateY(0);
    }
  }
  &.focus-state {
    .text-field-floating-label {
      color: @red;
    }
  }
}

.text-field-icon{
  width: 40px;
  height: 36px;
  display: flex;
  align-items: center;
  margin-top: 31px;
  .flex-shrink(0);
  + .item-field-content{
    margin-left: 16px;
  }
}

.text-field-content{
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 16px;
}


.text-field-floating-label,
.text-field-label-text {
  vertical-align: top;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  transition-duration: 200ms;
  width: 35%;
  .flex-shrink(0);
}
.text-field-floating-label,
.text-field-label-text {
  font-size: 14px;
  width: 100%;
}
.text-field-floating-label {
  transform-origin: left;
  transform: scale(16/12) translateY(21px);
  color: #7e848c;
  width: auto;
  max-width: 75%;
}



.text-field-label {
  width: 100%;
  display: block;
  position: relative;
  .hairline(bottom, #d3d6db);
  &:after {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    perspective: 1000;
    .translate3d();
    transition-duration: 200ms;
  }
  &.focus-state:after,
  &.not-empty-state:after,
  .focus-state &:after,
  .not-empty-state &:after {
    background: @red;
    .transform(scaleY(2)) !important;
  }
}

.text-field.focus-state{
  color: @red;
}

input[type="date"],
input[type="datetime-local"],
input[type="email"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="tel"],
input[type="text"],
input[type="time"],
input[type="url"],
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
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
  &::-webkit-input-placeholder {
    color: #7e848c;
  }
}

input,textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: none;
  box-shadow: none;
  border:none;
}
</style>
