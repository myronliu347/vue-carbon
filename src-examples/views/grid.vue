<template>
  <div class="vc-page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Grid</span>
    </header-bar>
    <scroll-view>
      <content-block>
        <p>引进 Framework7 的 flexbox 的栅格系统</p>
      </content-block>
      <div class="ks-grid">
        <content-title>有间隔的网格</content-title>
        <content-block>
          <grid-row gutter>
            <grid-col width="50">.col-50</grid-col>
            <grid-col width="50">.col-50</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="33">.col-33</grid-col>
            <grid-col width="33">.col-33</grid-col>
            <grid-col width="33">.col-33</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="33">.col-33</grid-col>
            <grid-col width="66">.col-66</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="50">.col-50</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="75">.col-75</grid-col>
            <grid-col width="25">.col-25</grid-col>
          </grid-row>
          <grid-row gutter>
            <div class="col-80">.col-80</div>
            <grid-col width="20">.col-20</grid-col>
          </grid-row>
        </content-block>
        <content-title>没有间隔的网格</content-title>
        <content-block>
          <grid-row>
            <grid-col width="50">.col-50</grid-col>
            <grid-col width="50">.col-50</grid-col>
          </grid-row>
          <grid-row>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
          </grid-row>
          <grid-row>
            <grid-col width="33">.col-33</grid-col>
            <grid-col width="33">.col-33</grid-col>
            <grid-col width="33">.col-33</grid-col>
          </grid-row>
          <grid-row>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
            <grid-col width="20">.col-20</grid-col>
          </grid-row>
          <grid-row>
            <grid-col width="33">.col-33</grid-col>
            <grid-col width="66">.col-66</grid-col>
          </grid-row>
          <grid-row>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="25">.col-25</grid-col>
            <grid-col width="50">.col-50</grid-col>
          </grid-row>
          <grid-row>
            <grid-col width="75">.col-75</grid-col>
            <grid-col width="25">.col-25</grid-col>
          </grid-row>
          <grid-row>
            <div class="col-80">.col-80</div>
            <grid-col width="20">.col-20</grid-col>
          </grid-row>
        </content-block>
        <content-title>嵌套网格</content-title>
        <content-block>
          <grid-row gutter>
            <grid-col width="50">.col-50
              <grid-row gutter>
                <grid-col width="50">.col-50</grid-col>
                <grid-col width="50">.col-50</grid-col>
              </grid-row>
            </grid-col>
            <grid-col width="50">.col-50
              <grid-row gutter>
                <grid-col width="33">.col-33</grid-col>
                <grid-col width="66">.col-66</grid-col>
              </grid-row>
            </grid-col>
          </grid-row>
        </content-block>
        <content-title>响应式网格</content-title>

        <content-block>
          <p>在平板和手机上有不同的宽度显示</p>
          <grid-row gutter>
            <grid-col width="100" tablet="50">.col-100.tablet-50</grid-col>
            <grid-col width="100" tablet="50">.col-100.tablet-50</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
            <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
            <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
            <grid-col width="50" tablet="25">.col-50.tablet-25</grid-col>
          </grid-row>
          <grid-row gutter>
            <grid-col width="100" tablet="40">.col-100.tablet-40</grid-col>
            <grid-col width="50" tablet="60">.col-50.tablet-60</grid-col>
            <grid-col width="50" tablet="60">.col-50.tablet-60</grid-col>
            <grid-col width="100" tablet="33">.col-100.tablet-33</grid-col>
          </grid-row>
        </content-block>
      </div>
    </scroll-view>
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
.ks-grid div[class*="col-"] {
    background: #fff;
    text-align: center;
    color: #000;
    border: 1px solid #ddd;
    padding: 5px;
    margin-bottom: 15px;
}
</style>
