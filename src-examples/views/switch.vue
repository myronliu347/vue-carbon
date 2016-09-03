<template>
  <div class="page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Switch</span>
    </header-bar>
    <content>
      <content-title>
        默认
      </content-title>
      <content-block>
        <switch :label="data1 ? 'true' : 'false'" :value.sync="data1"></switch>
        <switch :label="data2 ? 'true' : 'false'" :value.sync="data2"></switch>
      </content-block>
      <content-title>
        label 在左边的
      </content-title>
      <content-block>
        <switch label-left label="左边的label 1" :value="true"></switch>
        <switch label-left label="左边的label 2" :value="false"></switch>
      </content-block>

      <content-title>
        搭配 list 使用
      </content-title>
      <list>
        <item-cell>
            <item-title>
              选项1    {{data3 ? 'true': 'false'}}
            </item-title>
            <item-title-after>
              <switch :value.sync="data3"></switch>
            </item-title-after>
        </item-cell>
        <item-cell>
            <item-title>
              选项2    {{data4 ? 'true': 'false'}}
            </item-title>
            <item-title-after>
              <switch :value.sync="data4"></switch>
            </item-title-after>
        </item-cell>
      </list>


      <content-title>
        搭配其它表单
      </content-title>
      <form-list>
        <text-field label="用户名" placeholder="请输入你的姓名" icon="account_box"></text-field>
        <item-form icon="help_outline" label="是否是学生">
          <switch :value="true"></switch>
        </item-form>
      </form-list>
    </content>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  },
  data () {
    return {
      data1: false,
      data2: true,
      data3: false,
      data4: true
    }
  }
}
</script>

<style lang="css">
</style>
