<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Content block</span>
    </header-bar>
    <scroll-view>
      <content-title>Vue Carbon content-block</content-title>
      <content-block>
        <p>
          这个就是一个普通显示大段文本的组件，一般用来放些介绍的文字，
          看这是第一段文字。
        </p>
        <p>
          这是第二段文字，哈哈哈哈哈！！！
        </p>
      </content-block>
    </scroll-view>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
