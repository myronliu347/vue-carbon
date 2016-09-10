# DateSelect

时间选择组件， [demo](https://myronliu347.github.io/vue-carbon/#!/dateSelect)

依赖 [moment](http://momentjs.cn/)

基于 [hilongjw](https://github.com/hilongjw) 大神的 [vue-datepicker](https://github.com/hilongjw/vue-datepicker) 做的改造

## 用法

```html
<!--选择日期-->
<date-select label="日期选择"  placeholder="选择日期"></date-select>

<!--修改时间选择格式-->
<date-select label="修改格式" format="YYYY年MM月DD日"  placeholder="选择日期"></date-select>

<!--选择时间-->
<date-select label="选择时间" type="min" format="YYYY年MM月DD日 HH分mm秒" placeholder="选择时间"></date-select>

<!--限制只能选择工作日-->
<date-select label="只能选择工作日" :limit="[{type: 'weekday',available: ['1', '2', '3', '4', '5']}]" placeholder="选择日期"></date-select>

<!--限制选择时间段-->
<date-select label="仅选择七月" :limit="[{type:'fromto',from:'2016-07-01',to:'2016-07-31'}]"  placeholder="选择日期"></date-select>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| label | 标签 | String | | |
| placeholder | 提示文字 | String | | |
| value | 值 | String | | |
| type | 选择的类型 day 选择日期 min 选择时间 | String | day / min | day |
| format | 时间显示格式 | String | moment 的格式化时间类型 | YYYY-MM-DD |
| limit | 时间选择限制 | Array |  | [] |

#### 选择限制说明

* type 限制类型 weekday 工作日 fromto 时间段

weekday

* available 可选择的星期

formto

* form 可选择开始时间
* to   可选择结束时间

## 事件

### input-change

当 value 改变的时候出发 input-change 事件， 新的value会作为参数。
这个事件是为了配合 vuex 使用，可以从 vuex 改变 value
