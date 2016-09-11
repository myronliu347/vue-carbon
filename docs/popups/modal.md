# Modal

对话框组件，[demo](https://myronliu347.github.io/vue-carbon/#!/modal)

---

## 用法

```html
<modal title="标题" msg="这是内容。。。" :show.sync="modal"></modal>

<!--自定义内容-->
<modal title="标题" :show.sync="modal">
  这里是内容区域，点击关闭按钮，或者遮盖层关闭
</modal>

<!--自定义按钮-->
<modal title="标题" :show.sync="modal">
  <span>这里是内容区域，点击关闭按钮，或者遮盖层关闭</span>
  <button slot="footer" text="确定" @click="sure"></button>
</modal>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示对话框 | Boolean  | true / false | false |
| overlay | 是否显示遮盖层 |  Boolean  | true / false | true |
| overlayOpacity | 遮盖层透明度 | Number | 0 - 1 | 0.4 |
| overlayColor | 遮盖层颜色 | String |  | #000 |
| title | 标题文字 | String | | |
| msg |  内容 | String | | |
| clickOverlayClose | 点击遮盖层是否关闭 | Boolean | true / false | true |
| hideClose | 是否隐藏关闭按钮 | Boolean | true / false | false |

## Slots

| name | 描述 |
| :------------- | :------------- |
| -- | 默认， 分配modal 内容 |
| footer | 分配modal底部，一般用来自定义按钮 |


## alert

基于 modal 组件开发的，警告弹出框

```html
<alert :title="alert.title" :type="alert.type" :show.sync="alert.show" :msg="alert.msg" ></alert>
```

```javascript
{
  data () {
    return {
      alert: {
        show: false
      }
    }
  },
  methods: {
    showAlert (type) {
      this.alert = {
        title: '标题',
        msg: !type ? '这是内容' : type === 'info' ? '这是普通信息' : type === 'success' ? '成功啦！' : type === 'warning' ? '这是提醒！' : '出错啦！',
        show: true,
        type: type
      }
    }
  }
}
```

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示 | Boolean  | true / false | false |
| title | 标题文字 | String | | |
| msg | 内容文字 | String  | | |
| type | icon 类型 | String | 'info', 'success', 'warning', 'error' |  |
| onSure | 点击确定按钮后的回调， @sure 事件监听 | Function | | |

### sure 事件

点击确定按钮后触发事件

## confirm

确认对话框组件

```html
<confirm :title="confirm.title" show-icon @sure="handlerSure" :show.sync="confirm.show" :msg="confirm.msg" ></confirm>
```

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示 | Boolean  | true / false | false |
| title | 标题文字 | String | | |
| msg | 内容文字 | String  | | |
| showIcon | 是否显示 icon | Boolean  | true / false | false |
| onSure | 点击确定按钮后的回调， 也可以@sure 事件监听 | Function | | |
| onCancel | 点击取消按钮后的回调，也可以@cancel 事件监听 | Function | | |

### sure 事件

点击确定按钮后触发事件

### cancel 事件

点击取消按钮后触发事件


## prompt

输入提示框组件

```html
<prompt :title="prompt.title" @sure="handlerSure" :show.sync="prompt.show" :msg="prompt.msg" ></prompt>
```

```javascript
{
  data () {
    return {
      prompt: {
        show: false
      }
    }
  },
  methods: {
    showPrompt () {
      this.prompt = {
        title: '录入信息',
        msg: '请输入你的姓名',
        show: true
      }
    },
    handlerSure (input) {
      this.alert = {
        title: '信息',
        msg: '你输入的是：' + input,
        show: true
      }
    }
  }
}
```

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示 | Boolean  | true / false | false |
| title | 标题文字 | String | | |
| msg | 内容文字 | String  | | |
| onSure | 点击确定按钮后的回调， 也可以@sure 事件监听 | Function | | |
