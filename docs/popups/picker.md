# Picker

选择器，支持多 slot 联动, [demo](https://myronliu347.github.io/vue-carbon/#!/picker)

----

## 用法

传入 slots，当被选中的值发生变化时触发 picker-change 事件。picker-change 事件有两个参数，分别为当前 picker 的 vue 实例和各 slot 被选中的值组成的数组

```html
<picker :slots="years" @picker-change="yearChange" :values="[yearValues]" ></picker>
出生年份: <span style="color:#000;">{{yearValues.text}}</span>
```

```javascript
{
  data () {
    let fullYear = new Date().getFullYear()
    let years = []
    for (let i = 0; i <= 20; i++) {
      years.push({
        value: fullYear - i,
        text: (fullYear - i) + '年'
      })
    }
    return {
      years: [{values: years}],
      yearValues: years[10]
    }
  },
  methods: {
    yearChange (values) {
      this.yearValues = values[0]
    }
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| slots	| slot 对象数组 |	Array | |	[] |
| values | 选择的值 | Array | | [] |
| visibleItemCount |	slot 中可见备选值的个数 |	Number | | 5 |


## slot 对象

| key | 描述 |
| :------------- | :------------- |
| divider | 是否是分隔 |
| content | 分隔内容 |
| textAlign | 对齐方式 |
| width | 宽度 |
| values  | 对应 slot 的备选值数组  |
