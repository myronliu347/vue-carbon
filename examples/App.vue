<template>
<div id="app">
  <router-view transition="slide" keep-alive></router-view>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.slide-transition {
  transition-duration: .3s;
  width: 100%;
}

.slide-enter, .slide-leave {
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
}
.app-transition {
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
}

.app-enter, .app-leave {
  opacity: 0;
}
</style>
