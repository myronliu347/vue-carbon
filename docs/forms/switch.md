# Switch

开关组件, [demo](https://myronliu347.github.io/vue-carbon/#!/switch)

----

## 用法

```html
<switch label="switch" :value="value"></switch>
```

label 在左边

```html
<switch label="switch" label-left :value="value"></switch>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| label | 标签 | String | | |
| labelLeft | label是否在左边 | Boolean | true/false | false |
| value | 值 | Boolean | true/false | false |

## 事件

### input-change

当 value 改变的时候出发 input-change 事件， 新的value会作为参数。
这个事件是为了配合 vuex 使用，可以从 vuex 改变 value
