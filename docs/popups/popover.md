# Popover

弹出窗口(找不到合适的翻译。。。，还是看demo吧)， [demo](https://myronliu347.github.io/vue-carbon/#!/popover)

----

## 用法

```html
<popover :trigger="[$els.button,$els.menu, $els.bottom]">
  ...
</popover>
```

popover 可以定制不只一个元素触发（会给它们绑定 click 事件）， 内部可以定义不同的内容

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示 | Boolean | true / false | false |
| overlay | 是否显示遮盖层 |  Boolean  | true / false | true |
| overlayOpacity | 遮盖层透明度 | Number | 0 - 1 | 0.4 |
| overlayColor | 遮盖层颜色 | String |  | #000 |
| trigger | 触发显示的元素 | Array |  | [] |

## Slots

| name | 描述 |
| :------------- | :------------- |
| -- | 默认， 分配内容 |
