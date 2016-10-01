<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Bottom Nav</span>
  </header-bar>
  <scroll-view>
    <list>
      <item-cell>
        <item-title>
          当前选中
        </item-title>
        <item-title-after>
          {{toolActive === 0 ? '首页' : toolActive === 1 ? '发现' : '我的'}}
        </item-title-after>
      </item-cell>
    </list>

    <list v-if="toolActive === 0 " title="首页信息">
      <item-cell>
        <item-title>
          发布时间
        </item-title>
        <item-title-after>
          2016-10-15
        </item-title-after>
      </item-cell>
      <item-cell>
        <item-title>
          访问次数
        </item-title>
        <item-title-after>
          <badge value="23"></badge>
        </item-title-after>
      </item-cell>
      <item-cell>
        <item-title>
          测试数据
        </item-title>
        <item-title-after>
          test
        </item-title-after>
      </item-cell>
    </list>
    <list v-if="toolActive === 1 " title="人员信息">
      <item-cell>
        <item-title>
          艾瑞莉娅
        </item-title>
        <item-title-after>
          艾欧尼亚
        </item-title-after>
      </item-cell>
      <item-cell>
        <item-title>
          德莱厄斯
        </item-title>
        <item-title-after>
          洛克萨斯
        </item-title-after>
      </item-cell>
      <item-cell>
        <item-title>
          嘉文四世
        </item-title>
        <item-title-after>
          德玛西亚
        </item-title-after>
      </item-cell>
    </list>
    <list v-if="toolActive === 2 " title="个人信息">
      <item-cell>
        <item-title>
          姓名
        </item-title>
        <item-title-after>
          <badge value="23"></badge>
        </item-title-after>
      </item-cell>
      <item-cell>
        <item-title>
          年龄
        </item-title>
        <item-title-after>
          洛克萨斯
        </item-title-after>
      </item-cell>
      <item-cell>
        <item-title>
          居住地
        </item-title>
        <item-title-after>
          深圳
        </item-title-after>
      </item-cell>
    </list>

  </scroll-view>
  <bottom-nav :active="toolActive" @nav-change="tabClick">
    <bottom-nav-item icon="home" title="首页" ></bottom-nav-item>
    <bottom-nav-item icon="explore" title="发现"></bottom-nav-item>
    <bottom-nav-item icon="person" title="我的"></bottom-nav-item>
  </bottom-nav>
</div>
</template>

<script>
export default {
  data () {
    return {
      toolActive: 0
    }
  },
  methods: {
    tabClick (index) {
      this.toolActive = index
    },
    back () {
      window.history.back()
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
