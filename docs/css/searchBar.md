# SearchBar

顶部搜索框组件, [demo](https://myronliu347.github.io/vue-carbon/#!/searchBar)

----

## 用法

```html
<search-bar :focus.sync="focus"></search-bar>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| placeholder | 搜索框提示文字 | String | | '请输入搜索内容...' |
| focus | 输入框是否获取焦点 | Boolean | true/false | false |

## 事件

### search

当输入文字是触发此事件， 会传入 searchText (输入的文字) 参数

### search-active

搜索框获取焦点事件

### search-blur

搜索框失去焦点事件
