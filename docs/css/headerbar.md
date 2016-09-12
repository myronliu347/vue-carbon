# HeaderBar

顶部导航栏，支持显示按钮、自定义文字和固定在顶部。 [demo](https://myronliu347.github.io/vue-carbon/#!/headerBar)

----

## 用法

```html
<div class="vc-page">
  <header-bar>
    Header Bar
  </header-bar>
  <content></content>
</div>
```

左右两边加上按钮

```html
<header-bar>
  <icon-button slot="left" icon="menu"></icon-button>
  <span>左边有 icon</span>
</header-bar>

<header-bar>
  <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
  <span>两边有 icon</span>
  <icon-button slot="right" icon="search"></icon-button>
  <icon-button slot="right" icon="share"></icon-button>
</header-bar>
```

## Slots

| name | 描述     |
| :------------- | :------------- |
| -   | headerBar 中间的部分，一般用来放页面的title|
| left | 左边显示元素 |
| right | 有边显示元素 |
