<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Range</span>
    </header-bar>
    <content>
      <form-list>
        <item-form label="默认的">
          <range :value.sync="range1"></range>
          <div>{{range1}}</div>
        </item-form>
        <item-form label="设置默认值">
          <range :value.sync="range2"></range>
          <div>{{range2}}</div>
        </item-form>
        <item-form label="设置最小移动距离">
          <range :value.sync="range3" :step="10"></range>
          <div>{{range3}}</div>
        </item-form>
        <item-form label="设置最小值">
          <range :value.sync="range4" :min="50" :step="10"></range>
          <div>{{range4}}</div>
        </item-form>
        <item-form label="设置最最大值">
          <range :value.sync="range5" :max="200" :step="10"></range>
          <div>{{range5}}</div>
        </item-form>
      </form-list>
    </content>
  <div>
</template>

<script>
export default {
  data () {
    return {
      range1: 0,
      range2: 30,
      range3: 10,
      range4: 50,
      range5: 200
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
