<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Popup</span>
  </header-bar>
  <scroll-view class="center-block">
    <button-area>
      <button text="上面弹出" @click="topPopup = true" raised></button>
      <button text="下面弹出" @click="bottomPopup = true" raised></button>
      <button text="左边弹出" @click="leftPopup = true" raised></button>
      <button text="右边弹出" @click="rightPopup = true" raised></button>
    </button-area>
  </scroll-view>
  <popup position="bottom" class="demo-popup-bottom" :show.sync="bottomPopup">
    <div class="demo-bar">
      <span>弹出</span>
      <a href="javascript:;" class="demo-link" @click="bottomPopup = false">关闭</a>
    </div>
    <content-block>
      Popup 弹出框组件，可以从上下左右四个方位弹出，也可以直接渐变透明度显示，弹出框的宽度高度需要自己设置
    </content-block>
  </popup>
  <popup position="top" :overlay="false" class="demo-popup-top" :show.sync="topPopup">
    更新成功
  </popup>
  <popup position="left" class="demo-popup-left" :show.sync="leftPopup">
    <button-area>
      <button text="关闭弹框" @click="leftPopup = false" fill color="red" raised></button>
    </button-area>
  </popup>
  <popup position="right" class="demo-popup-right" :show.sync="rightPopup">
    <button-area>
      <button text="关闭弹框" @click="rightPopup = false" fill color="red" raised></button>
    </button-area>
  </popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css">
.vc-center-block{
  display: flex;
  align-items: center;
}
.demo-popup-bottom {
  width: 100%;
}
.demo-bar{
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #474a4f;
  color:#FFF;
  padding-left: 10px;
  font-size: 16px;
}
.demo-link{
  display: flex;
  align-items: center;
  color: #FFF;
  text-decoration: none;
  height: 48px;
  padding-left: 10px;
  padding-right: 10px;
}
.demo-popup-top{
  width: 100%;
  opacity: .8;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.demo-popup-left{
  display: flex;
  width: 85%;
  height: 100%;
  align-items: center;
}
.demo-popup-right{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
