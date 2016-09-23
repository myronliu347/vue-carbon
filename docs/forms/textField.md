# TextField

输入框组件，[demo](https://myronliu347.github.io/vue-carbon/#!/inputs)

----

## 用法

```html
<content-title>输入框</content-title>
<!--普通文本输入框-->
<form-list>
  <text-field label="用户名" placeholder="请输入你的姓名" icon="account_box" :value.sync="user.name"></text-field>
  <text-field label="电话" type="number" placeholder="请输入你的电话" icon="phone" :value.sync="user.phone"></text-field>
  <text-field label="简介" type="textarea" :rows="3" icon="markunread" placeholder="info_outline" :value.sync="user.introduction"></text-field>
</form-list>
<content-title>浮动 label 的输入框</content-title>
<form-list>
  <text-field label-float label="用户名" icon="account_box"></text-field>
  <text-field label-float label="电话" type="number" icon="phone"></text-field>
  <text-field label-float label="简介" type="textarea" :rows="3" icon="markunread"></text-field>
</form-list>
<content-title>没有图标</content-title>
<form-list>
  <text-field label="用户名"></text-field>
  <text-field label="电话" type="number"></text-field>
  <text-field label="简介" type="textarea" :rows="3"></text-field>
</form-list>
```

```javascript
{
  data () {
    return {
      user: {
        name: "",
        phone: "",
        introduction: ""
      }
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| label | 标签文字 | String | | |
| labelFloat | 是否为浮动标签 | Boolean | true/false | false |
| icon | 图标 | String | material icons | |
| type | 输入框类型, 同等与 input标签的 type, 不过多了一个 textarea,可以为多行文本输入框 | String | input[type] / textarea | 'text' |
| focus | 是否获取焦点 | Boolean | true/false | false |
| placeholder | input标签的placehodler | String | | |
| rows | type设为 textarea 时，启用，设置默认显示的行数 | Number |  | 0 |
| value | 输入框的值，input / textarea 的model，相当于绑定在 input[type=text] / textarea 上的 v-model | String |  |  |

## 事件

### input-change

当 value 改变的时候出发 input-change 事件， 新的value会作为参数。
这个事件是为了配合 vuex 使用，可以从 vuex 改变 value
