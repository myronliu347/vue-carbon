<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" icon="arrow_back" @click="back()"></icon-button>
    <span>关于</span>
  </header-bar>
  <scroll-view class="about-block">
    <img src="http://www.myronliu.com/img/uicon.jpg" class="my-icon"/>
    <div class="my-name">Myron</div>
    <a class="my-link" target="_blank" href="http://www.myronliu.com/">博客地址</a>
    <a class="my-link" target="_blank" href="https://github.com/myronliu347/vue-carbon">项目地址</a>
    <button raised fill @click="go" text="(✪ω✪)赏个star吧" color="red"></button>
  </scroll-view>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    },
    go () {
      window.open('https://github.com/myronliu347/vue-carbon')
    }
  }
}
</script>

<style lang="css">
.my-icon{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.my-name {
    font-size: 22px;
    margin: 16px 0;
}
.my-link {
  font-size: 18px;
  margin: 16px 0;
  display: inline-block;
}
.about-block{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
}
</style>
