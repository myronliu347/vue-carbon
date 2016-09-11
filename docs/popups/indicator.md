# Indicator

加载提示框. [demo](https://myronliu347.github.io/vue-carbon/#!/indicator)

----

## 用法

```html
<!--默认的toast提示框-->
<indicator :show="show" text="加载中" ></indicator>

<!--modal 加载框-->
<indicator :show="show" text="加载中" type="modal" ></indicator>

<!--控制透明度-->
<indicator :show="show" text="加载中" type="modal" overlayOpacity="0.4"></indicator>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| text | 提示文字 | String | | |
| type | 指示器类型 | String | modal / toast | toast |
| overlayColor | 遮盖层颜色 | String | | #000 |
| overlayOpacity | 遮盖层透明度 | Number | 0 - 1 | 0.0000001 |
