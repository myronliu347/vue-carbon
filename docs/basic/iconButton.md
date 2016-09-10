# IconButton

图标按钮，内容只可以设置按钮

## 用法

```html
<!--默认-->
<icon-button icon="mode_edit"></icon-button>

<!--颜色填充按钮-->
<icon-button icon="share" fill></icon-button>

<!--设置不同的颜色-->
<icon-button icon="search" color="red" fill></icon-button>
<icon-button icon="add" color="green" fill></icon-button>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| icon | 图标名称 | String | material icons | null |
| color | 按钮颜色 | String | red,green,amber,blue | #7e848c |
| fill | 设置为填充按钮 | Boolean | true/false | false |
