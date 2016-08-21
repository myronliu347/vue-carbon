<template>
  <div class="page" transition="app">
      <header-bar>
        <action slot="left">
          <icon value="menu"></icon>
        </action>
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
          title: 'icon',
          link: '/icons'
        }, {
          title: 'badge',
          link: '/badge'
        }, {
          title: 'button',
          link: '/button'
        }, {
          title: 'overlay',
          link: '/overlay'
        }, {
          title: 'circular',
          link: '/circular'
        }, {
          title: 'toast',
          link: ''
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
