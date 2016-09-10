<template>
  <div class="page" transition="app">
      <header-bar>
        <icon-button slot="left" @click="showNav" icon="menu"></icon-button>
        <span>Vue Carbon</span>
      </header-bar>
      <content>
        <content-block>
          Vue Carbon 是基于 vue 开发的material design ui 库。
        </content-block>
        <template  v-for="group in menus">
          <content-title>
            {{group.title}}
          </content-title>
          <list>
            <item-cell link v-link="menu.link" v-for="menu in group.children">
              <item-media>
                <i class="logo">C</i>
              </item-media>
              <item-title>
                {{menu.title}}
              </item-title>
            </item-cell>
          </list>
        </template>
      </content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navShow: false,
      menus: [{
        title: 'Basic',
        children: [{
          title: 'Icon',
          link: '/icons'
        }, {
          title: 'Badge',
          link: '/badge'
        }, {
          title: 'Button',
          link: '/button'
        }, {
          title: 'Float Button',
          link: '/floatButton'
        }, {
          title: 'Circular',
          link: '/circular'
        }, {
          title: 'Refresh Control',
          link: '/refreshControl'
        }, {
          title: 'Infinite Scroll',
          link: '/infiniteScroll'
        }]
      }, {
        title: 'CSS',
        children: [{
          title: 'Header Bar',
          link: '/headerBar'
        }, {
          title: 'Tab Bar',
          link: '/tabBar'
        }, {
          title: 'Search Bar',
          link: '/searchBar'
        }, {
          title: 'List View',
          link: '/listView'
        }, {
          title: 'Card',
          link: '/card'
        }, {
          title: 'Grid',
          link: '/grid'
        }, {
          title: 'Content Block',
          link: '/contentBlock'
        }]
      }, {
        title: 'Forms',
        children: [{
          title: 'Text Field',
          link: '/inputs'
        }, {
          title: 'Switch',
          link: '/switch'
        }, {
          title: 'Range',
          link: '/range'
        }, {
          title: 'Checkbox And Radio',
          link: '/check'
        }, {
          title: 'Select Field',
          link: '/select'
        }, {
          title: 'Date Select',
          link: '/dateSelect'
        }]
      }, {
        title: 'Popups',
        children: [{
          title: 'Overlay',
          link: '/overlay'
        }, {
          title: 'Toast',
          link: '/toast'
        }, {
          title: 'Modal',
          link: '/modal'
        }, {
          title: 'Popup',
          link: '/popup'
        }, {
          title: 'Action Sheet',
          link: '/actionSheet'
        }, {
          title: 'Popover',
          link: '/popover'
        }, {
          title: 'Indicator',
          link: '/indicator'
        }, {
          title: 'Picker',
          link: '/picker'
        }]
      }]
    }
  },
  methods: {
    showNav () {
      this.$dispatch('menu-show')
    }
  }
}
</script>

<style lang="css">
.logo{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #474a4f;
  color: #FFF;
  font-size: 18px;
  line-height: 1;
  font-weight: bold;
  border-radius: 50%;
}
.nav-icon-logo {
  width: 80px;
  height: 80px;
  background-color: #bbbfc4;
  color:#FFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
}

.nav-demo-title{
  font-size: 16px;
  margin-top: 16px;
}

.nav-demo-sub-title{
  color: #d3d6db;
  font-size: 14px;
}
</style>
