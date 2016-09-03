<template>
<div class="page">
  <header-bar>
    <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
    <span>Icons</span>
  </header-bar>
  <content>
    <content-block style="color: #ff5252">
      <icon :size="size" value="account_box"></icon>
      <icon :size="size" value="add"></icon>
      <icon :size="size" value="add_a_photo"></icon>
      <icon :size="size" value="arrow_back"></icon>
      <icon :size="size" value="arrow_drop_down"></icon>
      <icon :size="size" value="arrow_drop_up"></icon>
      <icon :size="size" value="phone"></icon>
      <icon :size="size" value="check"></icon>
      <icon :size="size" value="check_box"></icon>
      <icon :size="size" value="check_box_outline_blank"></icon>

      <icon :size="size" value="close"></icon>
      <icon :size="size" value="mode_edit"></icon>
      <icon :size="size" value="crop_original"></icon>
      <icon :size="size" value="markunread"></icon>

      <icon :size="size" value="error_outline"></icon>
      <icon :size="size" value="insert_invitation"></icon>
      <icon :size="size" value="explore"></icon>
      <icon :size="size" value="favorite"></icon>

      <icon :size="size" value="favorite_border"></icon>
      <icon :size="size" value="get_app"></icon>
      <icon :size="size" value="star"></icon>
      <icon :size="size" value="help_outline"></icon>

      <icon :size="size" value="highlight_off"></icon>
      <icon :size="size" value="lock"></icon>
      <icon :size="size" value="info_outline"></icon>
      <icon :size="size" value="keyboard_arrow_down"></icon>
      <icon :size="size" value="keyboard_arrow_left"></icon>
      <icon :size="size" value="keyboard_arrow_right"></icon>
      <icon :size="size" value="keyboard_arrow_up"></icon>
      <icon :size="size" value="menu"></icon>
      <icon :size="size" value="radio_button_unchecked"></icon>
      <icon :size="size" value="radio_button_checked"></icon>
      <icon :size="size" value="refresh"></icon>
      <icon :size="size" value="visibility"></icon>
      <icon :size="size" value="reorder"></icon>
      <icon :size="size" value="warning"></icon>
      <icon :size="size" value="search"></icon>
      <icon :size="size" value="share"></icon>
      <icon :size="size" value="star_border"></icon>
    </content-block>
  </content>
</div>
</template>

<script>
export default {
  data () {
    return {
      size: 30
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  },
  components: {}
}
</script>

<style lang="css">
.icon-item{
  display: inline-block;
}
</style>
