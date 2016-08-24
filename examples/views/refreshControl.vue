<template>
<div class="page">
  <header-bar>
    <action slot="left" @click="back()">
      <icon value="arrow_back"></icon>
    </action>
    <span>Refresh Control</span>
  </header-bar>
  <content>
    <div class="refresh-control">
      <circular :size="20" :border-width="2"></circular>
    </div>
  </content>
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

<style lang="less">
@import '../../src/utils/_mixins.less';
.refresh-control{
  display: flex;
  margin: 0 auto;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 50%;
  .depth(2);
  position: absolute;
  left: 50%;
  margin-left: -18px;
  margin-top: 24px;
}

.refresh-control-animate{
   transition: all 0.43s cubic-bezier(0.08, 0.55, 0.8, 1);
}

.refresh-control-hide{
  opacity: 0;
  transform: translate3d(0, -63px, 0);
}

.refresh-control-noshow{
  opacity: 0;
  transform: scale(0.01);
}

.refresh-control-refreshing {
  transform: scale(1);
  opacity: 1;
}

</style>
