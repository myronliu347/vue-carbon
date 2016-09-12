<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Popover</span>
    <icon-button slot="right" v-el:menu icon="menu"></icon-button>
  </header-bar>
  <content class="center-block">

      <button-area>
        <button text="点这里出现" raised v-el:button></button>
      </button-area>
  </content>
  <div class="demo-tool">
    <button text="点这里" raised v-el:bottom></button>
  </div>
  <popover :trigger="[$els.button,$els.menu, $els.bottom]">
    <list class="demo-popver-list">
      <item-cell ripple>
        <item-media>
          <icon value="reply"></icon>
        </item-media>
        <item-title>转办</item-title>
      </item-cell>
      <item-cell ripple icon="icon-" title="">
        <item-media>
          <icon value="mode_edit"></icon>
        </item-media>
        <item-title>编辑</item-title>
      </item-cell>
      <item-cell ripple>
        <item-media>
          <icon value="cached"></icon>
        </item-media>
        <item-title>刷新</item-title>
      </item-cell>
    </list>
  </popover>
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
.vc-list.demo-popver-list{
  margin: 0;
}
.vc-list.demo-popver-list .vc-item:after{
  content: none;
}
.vc-center-block{
  display: flex;
  align-items: center;
}
.demo-tool{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  height: 48px;
}
</style>
