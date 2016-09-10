# SelectField

下拉框组件， [demo](https://myronliu347.github.io/vue-carbon/#!/select)


## 用法

```html
<form-list>
  <select-field label="单选框" :options="games" placeholder="选择一个你喜欢的"></select-field>
  <select-field label="多选框" multi :options="games" placeholder="选择一个你喜欢的"></select-field>
</form-list>
```

```javascript
{
  data () {
    return {
      games: [{
        value: '01',
        text: '守望先锋'
      }, {
        value: '03',
        text: '英雄联盟'
      }, {
        value: '04',
        text: '炉石传说'
      }, {
        value: '05',
        text: '风暴英雄'
      }]
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| label | 标签文字 | String | | |
| icon | 图标 | String | material icons | |
| focus | 是否获取焦点 | Boolean | true/false | false |
| placeholder | 提示文字 | String | | |
| multi | 是否多选  | Boolean | true/false | false |
| value | 值 | [Array, Object, Number, String] |  |  |
| options | 选项 | Array | ['222', '1222'] / [{text: '2', value: '33'}] | [] |

注意 如果是 object 数组， object 必须要有 text 属性用来显示

## 事件

### input-change

当 value 改变的时候出发 input-change 事件， 新的value会作为参数。
这个事件是为了配合 vuex 使用，可以从 vuex 改变 value
