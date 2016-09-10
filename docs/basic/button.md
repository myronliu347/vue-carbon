# Button

按钮组件，可以定义不同样式，大小颜色的按钮, [demo](https://myronliu347.github.io/vue-carbon/#!/button)

----

## 用法

```html
<!--普通按钮-->
<button>测试</button>

<!--使用 icon-->
<button>
  <icon value="info"></icon>
  info
</button>

<!--fill-->
<button fill>fill</button>

<!--raised-->
<button raised>raised</button>

<!--颜色设置-->
<button color="red" raised>color button</button>

<!--大按钮-->
<button color="red" raised big>big button</button>

<!--不适用slot的写法-->
<button color="red" raised text="big button" icon="mode_edit"></button>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| text | 按钮上的文字 | String |  |       |
| icon | 按钮上的icon | String | materail icons | null |
| color | 按钮颜色    | String | red,green,amber,blue | #7e848c |
| fill | 设置为颜色填充按钮 | Boolean | true/false | false |
| raised | 设置为底部有阴影的按钮 | Boolean | true/false | false |
| big |  设置为大按钮 | Boolean | true/false | false |


## Slot

| name | 描述     |
| :------------- | :------------- |
| -   | button的内容，设置了之后 text, icon 参数将会无效  |
