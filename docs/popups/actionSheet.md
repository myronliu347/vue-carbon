# ActionSheet

操作表，从屏幕下方移入。 [demo](https://myronliu347.github.io/vue-carbon/#!/actionSheet)

## 用法

```html
<action-sheet :actions="actionSheet.actions" :show.sync="actionSheet.show" :show-cancel="actionSheet.showCancel"></action-sheet>
```

```javascript
{
  data () {
    return {
      actionSheet: {
        show: false,
        showCancel: true,
        actions: [{
          isLabel: true, // 是否是 label
          name: '选择一个你喜欢的' // 显示操作名称
        }, {
          name: '守望先锋',
          click: () => { // 点击
            this.showMsg('守望先锋')
          }
        }, {
          name: '炉石传说',
          click: () => {
            this.showMsg('炉石传说')
          }
        }, {
          name: '英雄联盟',
          color: 'red', // 设置颜色
          click: () => {
            this.showMsg('英雄联盟')
          }
        }, {
          name: '剑灵',
          click: () => {
            this.showMsg('剑灵')
          }
        }]
      }
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| show | 是否显示 | Boolean  | true / false | false |
| overlay | 是否显示遮盖层 |  Boolean  | true / false | true |
| overlayOpacity | 遮盖层透明度 | Number | 0 - 1 | 0.4 |
| overlayColor | 遮盖层颜色 | String |  | #000 |
| actions | 操作表内容 | Array | | [] |
| cancelText | 取消按钮的文字 | String | | 取消 |
| showCancel | 是否显示取消按钮 | Boolean | true / false  | true  |
| clickOverlayClose | 点击遮盖层是否关闭操作表 | Boolean | true / false  | true  |

## actions 配置

| name  | 描述 |
| :------------- | :------------- |
| name  | 操作名称      |
| color | 按钮颜色 |
| isLabel | 是否是标签， 设为true则不可被点击 |
| click | 点击之后的回调方法 |
