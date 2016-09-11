# Overlay

遮盖层组件，可定制颜色和透明度, [demo](https://myronliu347.github.io/vue-carbon/#!/overlay)

----

## 用法

```html
<!--通过外部v-if或者v-show控制-->
<overlay v-if="show"></overlay>

<!--定义不同的颜色和透明度-->
<overlay v-if="showWhite" :opacity="0.8" color="#FFF"></overlay>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| opacity | 遮盖层透明度 | Number | 0 - 1 | 0.4 |
| color | 遮盖层颜色 | String |   | #000  |
| fixed | 是否使用 position:fixed 默认是position:absolute | Boolean | true / false | false |
| onClick | 点击之后的回调，也可以再外部使用 @click 事件监听 | Function |        |     |
