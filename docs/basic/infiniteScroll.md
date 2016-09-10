# Infine Scroll

无限滚动组件，滚动到最低端会触发一个 load 事件，[demo](https://myronliu347.github.io/vue-carbon/#!/infiniteScroll)

## 用法

将组件放置在 content 的最底部

```html
<content v-el:scroller>
  <list>
    <item-cell v-for="item in items">
      <item-title>
        {{item}}
      </item-title>
    </item-cell>
  </list>
  <infinite-scroll :trigger="$els.scroller" @load="loadMore" :loading="loading"></infinite-scroll>
</content>
```

响应 load 事件

```javascript
data () {
  return {
    items: ['1', '2', '3', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    end: 20,
    loading: false
  }
},
methods: {
    // ...
  loadMore () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      if (this.end < 100) {
          for (let i = this.end; i < this.end + 20; i++) {
              this.items.push(String(i + 1))
          }
      }
      this.end += 20
    }, 1000)
  }
}
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| trigger | 触发滚动的元素，必须带有滚动条 | Element |  | document |
| loading | 是否是正在加载状态 | Boolean | true/false | false |

## 事件

### load

滚动到底部会触发 load事件，需要对loading的值再外部进行改变，来获得不同的展示效果
