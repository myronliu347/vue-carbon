# Badge

徽章，可指定颜色。 [demo](https://myronliu347.github.io/vue-carbon/#!/badge)

----

## 用法

```html
<badge value="23" color="carbon"></badge>
<badge value="24" color="red"></badge>
<badge value="25" color="green"></badge>
<badge value="26" color="amber"></badge>
<badge value="26" color="blue"></badge>
<!--搭配icon-->
<icon value="info">
  <badge color="blue">222</badge>
</icon>

```

## API


| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| value  | 显示的文本  | String |  |  |
| color   | badge颜色 | String |  carbon,red,green,amber,blue | #bbbfc4  |

## Slot

| name | 描述     |
| :------------- | :------------- |
| -   | 相当于 value 参数  |
