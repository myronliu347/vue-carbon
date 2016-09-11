# NavDrawer

抽屉式导航组件，从左边切入, [demo](https://myronliu347.github.io/vue-carbon)

----

## 用法

nav-drawer 只是一个容器， 需要搭配 `nav-menu` 、 `nav-menu-header` 、 `nav-divider` 使用

```html
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
  <!--内容-->
  <nav-menu-header>Nice Components</nav-menu-header>
  <nav-menu @click="closeNav()" icon="refresh" v-link="{name: 'refreshControl'}" title="Refresh Control"></nav-menu>
  <nav-menu @click="closeNav()" icon="insert_invitation" v-link="{name: 'dateSelect'}" title="Date Select"></nav-menu>
  <nav-menu @click="closeNav()" icon="cloud_queue" v-link="{name: 'modal'}" title="Modal"></nav-menu>

  <nav-divider></nav-divider>
  <nav-menu @click="closeNav()" icon="info_outline" v-link="{name: 'about'}"  title="关于"></nav-menu>
</nav-drawer>
```

## API

### nav-drawer

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示| Boolean  | true / false | false |
| overlay | 是否显示遮盖层 |  Boolean  | true / false | true |
| overlayOpacity | 遮盖层透明度 | Number | 0 - 1 | 0.4 |
| overlayColor | 遮盖层颜色 | String |  | #000 |

slots

| name | 描述 |
| :------------- | :------------- |
| -- | 默认， 分配内容 |
| header | 默认， 分配 header 部分 |

### nav-menu-header

菜单 header 文字， 默认 slot 写内容

### nav-menu

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| icon | icon 名称 | String | material icons | brightness_1 |
| title | 菜单标题 | String | | |
| after | 菜单最右边的文字 | String | | |

### nav-divider

菜单间的分隔线
