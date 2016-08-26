<template>
<div class="page">
  <header-bar>
    <action slot="left" @click="back()">
      <icon value="arrow_back"></icon>
    </action>
    <span>Refresh Control</span>
    <action slot="right" @click="refresh()">
      <icon value="refresh"></icon>
    </action>
  </header-bar>
  <content v-el:trigger>
    <refresh-control @refresh="refresh" :trigger="$els.trigger" :refreshing="refreshing"></refresh-control>
    <content-block>
      <p class="refresh-desc">
         按住 - 下拉 - 释放可以刷新数据
      </p>
    </content-block>
    <list>
      <item-cell v-for="item in items">
        <item-title>
          {{item}}
        </item-title>
      </item-cell>
    </list>
  </content>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: ['1', '2', '3', '5', '6', '7', '8', '9', '10'],
      end: 10,
      refreshing: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
        var arr = []
        for (let i = this.end; i < this.end + 10; i++) {
          arr.push(String(i + 1))
        }
        this.end += 10
        this.items = arr
      }, 2000)
    }
  }
}
</script>

<style lang="less">
.refresh-desc{
  text-align: center;
}
</style>
