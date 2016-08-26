<template>
  <div class="infinite-scroll">
    <circular v-show="loading" :size="24" color="#7e848c"></circular>
    <span v-show="loading" class="infinite-scroll-text">正在加载。。。</span>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: window.Element,
      require: true
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
  }
}
</script>

<style lang="css">
.infinite-scroll{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  line-height: 36px;
  width: 100%;
}
.infinite-scroll-text{
  margin-left: 16px;
  font-size: 16px;
}
</style>
