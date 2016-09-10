<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Float Button</span>
  </header-bar>
  <content>
    <content-block class="demo-float-button">
      <float-button icon="delete_forever" color="carbon"></float-button>
      <float-button icon="mode_edit"></float-button>
      <float-button icon="search" color="green"></float-button>
      <float-button icon="star" color="amber"></float-button>
      <float-button icon="filter_drama" color="blue"></float-button>
      <float-button fixed></float-button>
    </content-block>
  </content>
</div>
</template>

<script>
export default {
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
.demo-float-button{
  display: flex;
  justify-content: flex-start;
  align-content: center;
}
.demo-float-button .float-button +  .float-button{
  margin-left: 10px;
}
</style>
