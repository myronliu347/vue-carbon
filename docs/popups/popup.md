# Popup

弹出框组件, 可以自定义内容和方向, [demo](https://myronliu347.github.io/vue-carbon/#!/popup)

----

## 用法

```html
<!--默认弹出框 使用 fade-transition-->
<popup class="demo-popup-bottom" :show.sync="show">
  <!--省略内容-->
</popup>

<!--改变方向从下面弹出-->
<popup position="bottom" class="demo-popup-bottom" :show.sync="show">
  <!--省略内容-->
</popup>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示 | Boolean | true / false | false |
| overlay | 是否显示遮盖层 |  Boolean  | true / false | true |
| overlayOpacity | 遮盖层透明度 | Number | 0 - 1 | 0.4 |
| overlayColor | 遮盖层颜色 | String |  | #000 |
| clickOverlayClose | 是否点击遮盖层关闭弹出框 | Boolean | true / false | true |
| position | 弹出的方向 | String | top, bottom, left, right |  |

## Slots

| name | 描述 |
| :------------- | :------------- |
| -- | 默认， 分配内容 |
