# Card

卡片样式组件， [demo](https://myronliu347.github.io/vue-carbon/#!/card)

## 配合的组件

| 名称 |  描述 |
| :------------- | :------------- |
| card | 卡片 |
| cardHeader | 卡片的头部 |
| cardImage | 卡片的图片  |
| cardContent | 卡片的内容区域  |
| cardFooter | 卡片的底部区域
| cardTitle | 卡片的标题|
| cardTools | 卡片的标题右边的工具栏 |

## 用法

基础结构

```html
<card>
  <card-header>
    <card-title>Vue.js</card-title>
    <card-tools>
      <icon-button icon="add_a_photo"></icon-button>
    </card-tools>
  </card-header>
  <card-content>
    Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
  </card-content>
  <card-footer>
    card footer
  </card-footer>
</card>
```

图片 Card

```html
<card>
  <card-image src="http://img0.imgtn.bdimg.com/it/u=4168762024,1922499492&fm=21&gp=0.jpg">
    <card-title>白云飘飘</card-title>
  </card-image>
  <card-content>
    Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...
  </card-content>
</card>
```

## API

card-image

| 参数 | 说明 |	类型 | 可选值 | 默认值 |
| :---- | :---- | :---- | :---- | :---- |
| src | 图片路径 | String |  | null |
