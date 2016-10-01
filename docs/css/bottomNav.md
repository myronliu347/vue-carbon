# BottomNav

底部导航组件，需要 bottom-nav 和 bottom-nav-item 组件的配合使用  [demo](https://myronliu347.github.io/vue-carbon/#!/bottomNav)

------

## 用法

```html
<bottom-nav :active="toolActive" @nav-change="tabClick">
  <bottom-nav-item icon="home" title="首页" ></bottom-nav-item>
  <bottom-nav-item icon="explore" title="发现"></bottom-nav-item>
  <bottom-nav-item icon="person" title="我的"></bottom-nav-item>
</bottom-nav>
<script>
export default {
  data () {
    return {
      toolActive: 0
    }
  },
  methods: {
    tabClick (index) {
      this.toolActive = index
    }
  }
}
</script>
```

## API

### BottomNav

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| active | 显示的 index | Number | | 0 |

### BottomNavItem

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| icon | 显示的图标 | String | |  |
| title | 标题 | String | | |

## event

| name | 描述     |
| :------------- | :------------- |
| nav-change | 当 BottomNavItem 点击时触发，会传入index作为参数 |

## slots

BottomNav

| name | 描述     |
| :------------- | :------------- |
| -   | 放置 BottomNavItem |
