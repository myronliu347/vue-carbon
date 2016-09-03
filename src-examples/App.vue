<template>
<div id="app">
  <router-view transition="slide" keep-alive></router-view>
  <nav-drawer :show.sync="navShow">
    <div slot="header" class="nav-icon-logo">
      C
    </div>
    <div slot="header" class="nav-demo-title">
      Vue Carbon
    </div>
    <div slot="header" class="nav-demo-sub-title">
      一个基于 Vue 开发 material design 风格的移动端 UI 库
    </div>
    <nav-menu-header>Nice Components</nav-menu-header>
    <nav-menu @click="closeNav()" icon="refresh" v-link="{name: 'refreshControl'}" title="Refresh Control"></nav-menu>
    <!-- <nav-menu icon="search" v-link="{name: 'searchBar'}" title="Search Bar"></nav-menu> -->
    <nav-menu @click="closeNav()" icon="insert_invitation" v-link="{name: 'dateSelect'}" title="Date Select"></nav-menu>
    <nav-menu @click="closeNav()" icon="cloud_queue" v-link="{name: 'modal'}" title="Modal"></nav-menu>
    <nav-divider></nav-divider>
    <nav-menu @click="closeNav()" icon="info_outline" v-link="{name: 'about'}"  title="关于"></nav-menu>
  </nav-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      navShow: false
    }
  },
  methods: {
    closeNav () {
      this.navShow = false
    }
  },
  events: {
    'menu-show': function () {
      this.navShow = true
    }
  }
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
