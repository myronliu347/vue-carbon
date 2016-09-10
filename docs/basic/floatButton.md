# Float Button

浮动按钮, [demo](https://myronliu347.github.io/vue-carbon/#!/floatButton)

```html
<float-button icon="delete_forever" color="default"></float-button>
<float-button icon="mode_edit"></float-button>
<float-button icon="search" color="green"></float-button>
<float-button icon="star" color="amber"></float-button>
<float-button icon="filter_drama" color="blue"></float-button>

<!--固定按钮-->
<float-button fixed color="red"></float-button>

<!--调整固定的位置-->
<float-button style="left: 100px; top: 100px;" fixed color="red"></float-button>
```

# API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| icon | icon 名称 | String | materail icons |  |
| color | 按钮颜色 | String | carbon, red, green, blue, amber | red |
| fixed | 设置固定按钮 | Boolean | true/false | false |
