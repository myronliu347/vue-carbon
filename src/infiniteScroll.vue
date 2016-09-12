<template>
  <div class="vc-infinite-scroll">
    <circular v-show="loading" :size="24" color="carbon"></circular>
    <span v-show="loading" class="vc-infinite-scroll-text">正在加载。。。</span>
  </div>
</template>

<script>
import circular from './circular'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: window.Element,
      default () {
        return document
      }
    }
  },
  methods: {
    onscroll () {
      if (this.loading) return
      const scroller = this.trigger
      let h = scroller.scrollHeight - scroller.scrollTop - 5
      let sh = scroller.offsetHeight
      if (h <= sh) {
        this.loading = true
        this.$emit('load')
      }
    }
  },
  attached () {
    this.handlerScroll = () => {
      this.onscroll()
    }
    this.trigger.addEventListener('scroll', this.handlerScroll, false)
  },
  detached () {
    this.trigger.removeEventListener('scroll', this.handlerScroll, false)
  },
  components: {
    circular
  }
}
</script>

<style lang="css">
.vc-infinite-scroll{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  line-height: 36px;
  width: 100%;
}
.vc-infinite-scroll-text{
  margin-left: 16px;
  font-size: 16px;
}
</style>
