<template>
<div class="vc-page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Tab Bar</span>
  </header-bar>
  <tab-bar :active="tabActive">
    <tab-bar-item @tabbar-click="tabBarClick">
      tab1
    </tab-bar-item>
    <tab-bar-item @tabbar-click="tabBarClick">
      tab2
    </tab-bar-item>
    <tab-bar-item @tabbar-click="tabBarClick">
      tab3
    </tab-bar-item>
  </tab-bar>
  <scroll-view>
    <list>
      <item-cell>
        <item-title>当前选中</item-title>
        <item-title-after>
          tab{{tabActive + 1}}
        </item-title-after>
      </item-cell>
    </list>
    <list v-if="tabActive === 0">
      <item-cell>
        <item-title>内容1</item-title>
      </item-cell>
      <item-cell>
        <item-title>内容2</item-title>
      </item-cell>
      <item-cell>
        <item-title>内容3</item-title>
      </item-cell>
      <item-cell>
        <item-title>内容4</item-title>
      </item-cell>
      <item-cell>
        <item-title>内容5</item-title>
      </item-cell>
      <item-cell>
        <item-title>内容6</item-title>
      </item-cell>
    </list>
    <list v-if="tabActive === 1">
      <item-cell>
        <item-title>测试1</item-title>
      </item-cell>
      <item-cell>
        <item-title>测试2</item-title>
      </item-cell>
      <item-cell>
        <item-title>测试3</item-title>
      </item-cell>
      <item-cell>
        <item-title>测试4</item-title>
      </item-cell>
      <item-cell>
        <item-title>测试5</item-title>
      </item-cell>
      <item-cell>
        <item-title>测试6</item-title>
      </item-cell>
    </list>
    <list v-if="tabActive === 2">
      <item-cell>
        <item-title>选项1</item-title>
      </item-cell>
      <item-cell>
        <item-title>选项2</item-title>
      </item-cell>
      <item-cell>
        <item-title>选项3</item-title>
      </item-cell>
      <item-cell>
        <item-title>选项4</item-title>
      </item-cell>
      <item-cell>
        <item-title>选项5</item-title>
      </item-cell>
      <item-cell>
        <item-title>选项6</item-title>
      </item-cell>
    </list>
  </scroll-view>
</div>
</template>

<script>
export default {
  data () {
    return {
      tabActive: 0
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    tabBarClick (index) {
      this.tabActive = index
    }
  }
}
</script>

<style lang="less">
</style>
