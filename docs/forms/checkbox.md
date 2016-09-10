# Checkbox

多选按钮组，[demo](https://myronliu347.github.io/vue-carbon/#!/check)

----

## 用法

```html
<checkbox v-for="item in checkboxData1" name="checkbox1" :model.sync="checkbox1" :value="item" :label="item"></checkbox>
```

```javascript
{
  data () {
    return {
      checkboxData1: ['选项1', '选项2', '选项3'],
      checkbox1: []
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| name | 必须，相当于 input[type=checkbox] 的name | String | | |
| value | 值 | String |  |  |
| model | checkbox 的model，相当于绑定在 input[type=checkbox] 上的 v-model | Array | | [] |
| label | 标签 | String | | |
| labelLeft | 标签是否在左边 | Boolean | true/false | false |

## 事件

### input-change

当 model 改变的时候出发 input-change 事件， 新的 model 会作为参数。
这个事件是为了配合 vuex 使用，可以从 vuex 改变 model
