<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Checkbox And Radio</span>
  </header-bar>
  <content>
    <content-title>
      checkbox
    </content-title>
    <content-block>
      <checkbox v-for="item in checkboxData1" name="checkbox1" :model.sync="checkbox1" :value="item" :label="item"></checkbox>
    </content-block>
    <list>
      <item-cell>
        <item-title>选中的项</item-title>
        <item-title-after>{{checkbox1}}</item-title-after>
      </item-cell>
    </list>
    <content-title>
      radio
    </content-title>
    <content-block>
      <radio v-for="item in radioData1" name="radio1" :model.sync="radio1" :value="item" :label="item"></radio>
    </content-block>
    <list>
      <item-cell>
        <item-title>选中的项</item-title>
        <item-title-after>{{radio1}}</item-title-after>
      </item-cell>
    </list>
    <content-title>
      搭配 list 使用
    </content-title>
    <list>
      <item-cell @click="addCheck(item)" ripple v-for="item in checkboxData2">
        <item-media>
          <checkbox name="checkbox2" :value="item" :model.sync="checkbox2"></checkbox>
        </item-media>
        <item-title>
          {{item}}
        </item-title>
      </item-cell>
      <item-cell>
        <item-title>选中的项</item-title>
        <item-title-after>{{checkbox2}}</item-title-after>
      </item-cell>
    </list>
    <content-title>
      搭配 form list 使用
    </content-title>
    <form-list>
      <item-form label="选择一个" icon="help_outline">
        <div>
          <radio v-for="item in radioData2" name="radio2" :model.sync="radio2" :value="item" :label="item"></radio>
        </div>
      </item-form>
    </form-list>
  </content>
</div>
</template>

<script>
export default {
  data () {
    return {
      checkboxData1: ['选项1', '选项2', '选项3'],
      checkbox1: [],
      radioData1: ['选项1', '选项2', '选项3'],
      radio1: '',
      checkboxData2: ['选项1', '选项2', '选项3'],
      checkbox2: [],
      radioData2: ['选项1', '选项2', '选项3'],
      radio2: ''
    }
  },
  methods: {
    back () {
      window.history.back()
    },
    addCheck (text) {
      let index = this.checkbox2.indexOf(text)
      if (index === -1) {
        this.checkbox2.push(text)
      } else {
        this.checkbox2.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="css">
.inline{
  display: flex;
}
</style>
