# Refresh Control

下拉刷新组件, [demo](https://myronliu347.github.io/vue-carbon/#!/refreshControl)

## 用法

```html
<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Refresh Control</span>
    <icon-button slot="right" @click="refresh()" icon="refresh"></icon-button>
  </header-bar>
  <content v-el:trigger>
    <!--加载下拉刷新数据-->
    <refresh-control @refresh="refresh" :trigger="$els.trigger" :refreshing="refreshing"></refresh-control>
    <content-block>
      <p class="refresh-desc">
         按住 - 下拉 - 释放可以刷新数据
      </p>
    </content-block>
    <!--渲染数据-->
    <list>
      <item-cell v-for="item in items">
        <item-title>
          {{item}}
        </item-title>
      </item-cell>
    </list>
  </content>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: ['1', '2', '3', '5', '6', '7', '8', '9', '10'],
      end: 10,
      refreshing: false
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
        var arr = []
        for (let i = this.end; i < this.end + 10; i++) {
          arr.push(String(i + 1))
        }
        this.end += 10
        this.items = arr
      }, 2000)
    }
  }
}
</script>
<style>
.refresh-desc{
  text-align: center;
}
</style>
```

## API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| trigger | 触发下拉刷新的元素，元素的必须是带滚动条的 | Element |  | document |
| refreshing | 是否显示刷新组件 | Boolean | true/false | false |

## 事件

### refresh

刷新数据事件，需要在响应方法中控制 refreshing 的值， 组件才会呈现不同的显示效果。
