# TabBar

顶部选项卡组件, 需要 tab-bar 和 tab-item 组件的配合

-----

## 用法

```html
<tab-bar :active="tabActive">
  <tab-bar-item @tabbar-click="tabBarClick">
    tab1
  </tab-bar-item>
  <tab-bar-item @tabbar-click="tabBarClick">
    tab2
  </tab-bar-item>
  <tab-bar-item @tabbar-click="tabBarClick">
    tab3
  </tab-bar-item>
</tab-bar>
<list v-if="tabActive === 0">
  <!--省略内容-->
</list>
<list v-if="tabActive === 1">
  <!--省略内容-->
</list>
<list v-if="tabActive === 2">
  <!--省略内容-->
</list>
```

```javascript
{
  data () {
    return {
      tabActive: 0 // tabActive 组件内部不控制，便于和 vuex做配合
    }
  },
  methods: {
    tabBarClick (index) {
      this.tabActive = index  // 响应点击事件
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| active | 显示的tabItem的 index | Number | | 0 |

## slots

tabBar

| name | 描述     |
| :------------- | :------------- |
| -   | 放置 tabItem |

tabItem

| name | 描述     |
| :------------- | :------------- |
| -   | 内容，可以是文字和图标 |
