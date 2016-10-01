# SnackBar

底部提示信息组件组件  [demo](https://myronliu347.github.io/vue-carbon/#!/snackBar)

-----

## 用法

```html
<snack-bar message="一段简单的文字"  @action-click="handlerAction"></snack-bar>

<snack-bar message="一段简单的文字" action="Action"  @action-click="handlerAction"></snack-bar>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| message | 提示的文字 | String | |  |
| Action | 动作按钮文字 | String | |  |

## Events

| name | 描述 |
| :------------- | :------------- |
| action-click      | 当动作按钮点击时触发事件 |
