<template>
<div class="vc-search-bar" :class="{'vc-searchbar-active': focus}">
  <div class="vc-searchbar-input">
    <input type="search" v-el:search @focus="this.focus = true" @blur="this.focus = false" v-model="searchText" :placeholder="placeholder">
    <a href="javascript:;" @click.stop="clear()" class="vc-searchbar-clear"></a>
  </div>
</div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入搜索内容...'
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    clear () {
      this.searchText = ''
      this.$nextTick(() => {
        this.$els.search.focus()
      })
    }
  },
  watch: {
    searchText () {
      this.$emit('search', this.searchText)
    },
    focus () {
      if (this.focus) {
        this.$emit('search-active')
      } else {
        this.$emit('search-blur')
      }
    }
  }
}
</script>

<style lang="less">
@import "../utils/_vars.less";
@import "../utils/_mixins.less";
.vc-search-bar {
  height: 48px;
  width: 100%;
  background: @barcolor;
  padding: 0 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  z-index: 100;
  a {
    position: relative;
    color: #fff;
    .active-highlight();
  }
  .vc-searchbar-input {
    width: 100%;
    height: 32px;
    position: relative;
    .flex-shrink(1);
  }
  input[type="search"] {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    border-radius: 0;
    font-family: inherit;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    padding: 0 36px 0 24px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 0 center;
    transition: all 300ms;
    .encoded-svg-background( "<svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    -webkit-background-size: 24px 24px;
    background-size: 24px 24px;
    border-bottom: 1px solid #fff;
    opacity: 0.6;
    &::-webkit-input-placeholder {
      color: rgba(255,255,255,1);
      opacity: 1;
    }
    &::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
  .vc-searchbar-clear {
    position: absolute;
    width: 56px;
    height: 100%;
    right: -16px;
    top: 0;
    opacity: 0;
    pointer-events: none;
    background-position: center;
    background-repeat: no-repeat;
    .encoded-svg-background( "<svg fill='#fff' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    -webkit-background-size: 24px 24px;
    background-size: 24px 24px;
    transition: all 300ms;
    cursor: pointer;
  }
  .vc-searchbar-cancel {
    display: none;
  }
  &.vc-searchbar-active {
    input[type="search"] {
      opacity: 1;
    }
    .vc-searchbar-clear {
      pointer-events: auto;
      opacity: 1;
    }
  }
  &.vc-searchbar-not-empty {
    .vc-searchbar-clear {
      pointer-events: auto;
      opacity: 1;
    }
  }
}
</style>
