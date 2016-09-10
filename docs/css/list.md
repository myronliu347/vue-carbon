# ListView

列表系列组件， 需要和 item 系列组件配合使用， [demo](https://myronliu347.github.io/vue-carbon/#!/listView)

----

## 配合的组件

| 名称 |  描述 |
| :------------- | :------------- |
| list | 列表，内部可以放置 item 或 item-cell 组件  |
| item | 列表项组件 |
| item-cell | 单行列表项组件 |
| item-divider | 列表项之间的间隔 |
| item-media | 用来放置 icon或者图片 |
| item-content | 用来方式 item 具体内容 |
| item-title-row | 列表项的标题行 |
| item-title | 列表项的标题 |
| item-title-after | 列表项标题右边的内容 |
| item-sub-title | 列表项子标题 |
| item-text | 列表项多行文本内容  |


## 用法

不同的 item 布局

```html
<list>
  <!--单行列表项-->
  <item-cell>
    <item-media>
      <!--此处可以放置 icon 和 图片-->
    </item-media>
    <item-title>
      <!--标题-->
    </item-title>
    <item-title-after>
      <!--最右边的文字-->
    </item-title-after>
  </item-cell>

  <!--item之间的间隔-->
  <item-divider>
    <!--间隔内容-->
  </item-divider>

  <!--多行列表项-->
  <item>
    <item-media>
      <!--此处可以放置 icon 和 图片-->
    </item-media>
    <item-content>
      <item-title-row>
        <item-title>
          <!--title信息-->
        </item-title>
        <item-title-after>
          <!--title 右边的信息-->
        </item-title-after>
      </item-title-row>
      <item-sub-title>
        <!--子标题-->
      </item-sub-title>
      <item-text>
        <!--文本介绍信息-->
      </item-text>
    </item-content>
  <item>

  <!--示例代码-->
  <item-cell>
    <item-media>
      <icon value="info">
    </item-media>
    <item-title>
      后面有徽章的
    </item-title>
    <item-title-after>
      <badge value="23"></badge>
    </item-title-after>
  </item-cell>

  <item>
    <item-media>
      <img src="http://i1.17173cdn.com/9ih5jd/YWxqaGBf/forum/images/2013/10/16/174233sqpqp7zt7o71qu73.png"/>
    </item-media>
    <item-content>
      <item-title-row>
        <item-title>艾欧尼亚</item-title>
        <item-title-after>2014-12-23</item-title-after>
      </item-title-row>
      <item-sub-title>
        电信一区
      </item-sub-title>
      <item-text>
        《艾欧尼亚》是由Riot Games开发并由腾讯游戏代理的网络游戏《英雄联盟》中的势力名称，同时也是中国区服务器名称之一（别称：电信一区）；位于海岛上的城邦艾欧尼亚是寻求心灵进化的天堂。艾欧尼亚人天性和平。
      </item-text>
    </item-content>
  </item>
</list>

```

点击波纹效果

```html
<item-cell ripple></item-cell>
<item ripple></item>
```

最右边显示箭头

```html
<!--设置了link之后会带上波纹点击效果-->
<item-cell link></item-cell>
<item link></item>
```

### API

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| ripple | 是否有波纹点击效果 | Boolean | true/false | false |
| link | 是否有可点击箭头标识 | Boolean | true/false | false |
