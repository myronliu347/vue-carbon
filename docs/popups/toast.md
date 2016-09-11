# Toast

简短的消息提示框，[demo](https://myronliu347.github.io/vue-carbon/#!/toast)

---

## 用法

```html
<toast v-for="toast in toasts" :text="toast.text" :loading="toast.loading" :icon="toast.icon" :center="toast.center"></toast>
```

```javascript
{
  data () {
    return {
      toasts: []
    }
  },
  methods: {
    show (type) {
      switch (type) {
        case 'center':
          this.toasts.push({
            text: '在中间',
            center: true
          })
          break
        case 'ok':
          this.toasts.push({
            text: '操作成功',
            icon: 'check',
            center: true
          })
          break
        default:
          this.toasts.push({
            text: '默认toast'
          })
          break
      }
      setTimeout(() => this.toasts.splice(0, 1), 2000)
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| center | toast是否在中间 | Boolean | true / false | false |
| text | 提示文字 | String |  |  |
| icon | 图标 | String | material icons |  |
