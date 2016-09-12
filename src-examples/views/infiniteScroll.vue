<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Infinite Scroll</span>
    </header-bar>
    <content v-el:scroller>
      <content-block>
        <p class="refresh-desc">
           向下滑动可以加载更多的数据
        </p>
      </content-block>
      <list>
        <item-cell v-for="item in items">
          <item-title>
            {{item}}
          </item-title>
        </item-cell>
      </list>
      <infinite-scroll :trigger="$els.scroller" @load="loadMore" :loading="loading"></infinite-scroll>
    </content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['1', '2', '3', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
      end: 20,
      loading: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    loadMore () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        if (this.end < 100) {
          for (let i = this.end; i < this.end + 20; i++) {
            this.items.push(String(i + 1))
          }
        }
        this.end += 20
      }, 1000)
    }
  }
}
</script>

<style lang="css">
</style>
