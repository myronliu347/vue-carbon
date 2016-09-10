## range

滑块，支持自定义步长

----

## 用法

```html
<range :value.sync="range1"></range>
<!--定义步长-->
<range :value.sync="range3" :step="10"></range>
<!--定义最小值-->
<range :value.sync="range4" :min="50" :step="10"></range>
<!--定义最大值-->
<range :value.sync="range5" :max="200" :step="10"></range>
```

搭配 item-form

```html
<item-form label="默认的">
  <range :value.sync="range1"></range>
  <div>{{range1}}</div>
</item-form>
```



## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| value | 值 | Number | | |
| max | 最大值 | Number | | 100 |
| min | 最小值 | Number | | 0 |
| step | 步长 | Number | | 0.1 |

## 事件

### input-change

当 value 改变的时候出发 input-change 事件， 新的value会作为参数。
这个事件是为了配合 vuex 使用，可以从 vuex 改变 value
