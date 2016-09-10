# ItemForm

表单项，可设置 icon 和 label，[demo]([demo](https://myronliu347.github.io/vue-carbon/#!/inputs)

----

## 用法

```html
<form-list>
  <!--搭配switch-->
  <item-form icon="help_outline" label="是否是学生">
    <switch :value="true"></switch>
  </item-form>
  <!--搭配checkbox-->
  <item-form label="选择一个" icon="help_outline">
    <radio name="radio2" :model.sync="radio2" value="选项1" label="选项1"></radio>
  </item-form>
</form-list>
```

另外 text-field、select-field、date-select 这三个组件内部集成了 item-form。

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| label | 表单的标签 | String  | | |
| icon  | icon     | String  | material icons | |
| focus | 是否获取焦点 | Boolean | true/false | false |
| noEmpty | 是否不为空 | Boolean | true/false | false |

## Slots

| name | 描述 |
| :------------- | :------------- |
| —— | 用来放置表单元素 |
