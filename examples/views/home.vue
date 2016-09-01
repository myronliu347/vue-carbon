<template>
  <div class="page" transition="app">
      <header-bar>
        <icon-button slot="left" icon="menu"></icon-button>
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
            <item link v-link="menu.link" v-for="menu in group.children">
              <item-media>
                <i class="logo">C</i>
              </item-media>
              <item-content>
                <item-title-row>
                  <item-title>
                    {{menu.title}}
                  </item-title>
                </item-title-row>
              </item-content>
            </item>
          </list>
        </template>
      </content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [{
        title: '基础组件',
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
          title: 'Overlay',
          link: '/overlay'
        }, {
          title: 'Circular',
          link: '/circular'
        }, {
          title: 'Toast',
          link: '/toast'
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
          title: 'TextField',
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
        title: 'Modals',
        children: [{
          title: 'Modal',
          link: '/modal'
        }, {
          title: 'Popup',
          link: '/popup'
        }]
      }]
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
</style>
