# Radio

单选按钮，[demo](https://myronliu347.github.io/vue-carbon/#!/check)

----

## 用法

```html
<radio v-for="item in radioData1" name="radio1" :model.sync="radio1" :value="item" :label="item"></radio>
```

```javascript
{
  data () {
    return {
      radioData1: ['选项1', '选项2', '选项3'],
      radio1: ''
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| name | 必须，相当于 input[type=radio] 的name | String | | |
| value | 值 | String |  |  |
| model | radio 的model，相当于绑定在 input[type=radio] 上的 v-model | String | | |
| label | 标签 | String | | |
| labelLeft | 标签是否在左边 | Boolean | true/false | false |

## 事件

### input-change

当 model 改变的时候出发 input-change 事件， 新的 model 会作为参数。
这个事件是为了配合 vuex 使用，可以从 vuex 改变 model
