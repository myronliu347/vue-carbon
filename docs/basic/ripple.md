# Ripple

点击波纹特效组件

## 用法

```html
<!--放在点击内容里面-->
<a href="javascript:;" class="button" v-el:button>
  <ripple :trigger="$els.button"></ripple>
</a>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| trigger | 触发点击效果元素 | Element|  | null |
| color | 波纹的颜色 | String  |  | 当前元素的color值 |
