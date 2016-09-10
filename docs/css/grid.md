# Grid

栅格布局组件，利用 flexbox 实现的栅格布局 [demo](https://myronliu347.github.io/vue-carbon/#!/grid)

----

## 用法

基础用法

```html
<grid-row gutter>
  <grid-col width="50">.col-50</grid-col>
  <grid-col width="50">.col-50</grid-col>
</grid-row>
```


设置平板上的宽度
```html
<grid-row gutter>
  <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
  <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
  <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
  <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
</grid-row>
```

## API

grid-row

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| gutter | 是否有间隔 | Boolean | true/false | false |

grid-col

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| width | 宽度   | Number | 0 - 100 |  |
| tablet | 在平板上的宽度 | Number | 0 - 100 | |
