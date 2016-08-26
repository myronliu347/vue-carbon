<template>
  <div class="page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Badge</span>
    </header-bar>
    <content>
      <content-title>不同颜色的徽章</content-title>
      <list>
        <item>
          <item-content>
            <item-title-row>
              <item-title>default</item-title>
              <item-title-after>
                <badge value="12"></badge>
              </item-title-after>
            </item-title-row>
          </item-content>
        </item>
        <item>
          <item-content>
            <item-title-row>
              <item-title>carbon</item-title>
              <item-title-after>
                <badge value="12" color="carbon"></badge>
              </item-title-after>
            </item-title-row>
          </item-content>
        </item>
        <item>
          <item-content>
            <item-title-row>
              <item-title>red</item-title>
              <item-title-after>
                <badge value="12" color="red"></badge>
              </item-title-after>
            </item-title-row>
          </item-content>
        </item>
        <item>
          <item-content>
            <item-title-row>
              <item-title>green</item-title>
              <item-title-after>
                <badge value="12" color="green"></badge>
              </item-title-after>
            </item-title-row>
          </item-content>
        </item>
        <item>
          <item-content>
            <item-title-row>
              <item-title>amber</item-title>
              <item-title-after>
                <badge value="12" color="amber"></badge>
              </item-title-after>
            </item-title-row>
          </item-content>
        </item>
      </list>

      <content-title>icon 上的徽章</content-title>
      <content-block>
        <icon value="explore">
          <badge value="12" color="red"></badge>
        </icon>
        <icon style="margin-left:15px" value="markunread">
          <badge value="12" color="green"></badge>
        </icon>
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
</style>
