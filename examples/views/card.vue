<template>
  <div class="page">
    <header-bar>
      <icon-button slot="left" @click="back()" icon="arrow_back"></icon-button>
      <span>Card</span>
    </header-bar>
    <content>
      <content-title>最简单的Card</content-title>
      <card>
        <card-content>
          Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
        </card-content>
      </card>

      <card>
        <card-header>
          <card-title>Vue.js</card-title>
        </card-header>
        <card-content>
          Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
        </card-content>
        <card-footer>
          card footer
        </card-footer>
      </card>
      <content-title>不同风格的card</content-title>
      <card>
        <card-image src="http://img0.imgtn.bdimg.com/it/u=4168762024,1922499492&fm=21&gp=0.jpg">
          <card-title>白云飘飘</card-title>
        </card-image>
        <card-content>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </card-content>
      </card>
      <card>
        <card-header>
          <card-title>Vue.js</card-title>
          <card-tools>
            <icon-button icon="add_a_photo"></icon-button>
          </card-tools>
        </card-header>
        <card-image src="http://vuejs.org/images/logo.png">
        </card-image>
        <card-content>
          Vue.js 是用于构建交互式的 Web  界面的库。它提供了 MVVM 数据绑定和一个可组合的组件系统，具有简单、灵活的 API。
        </card-content>
        <card-footer>
          <icon-button icon="favorite"></icon-button>
          <icon-button icon="share"></icon-button>
        </card-footer>
      </card>
      <card>
        <card-header>
          <card-title>列表组合</card-title>
        </card-header>
        <card-content>
          <list>
            <item>
              <item-media>
                <img src="http://img2.imgtn.bdimg.com/it/u=584136133,2034101953&fm=21&gp=0.jpg"/>
              </item-media>
              <item-content>
                <item-title-row>
                  <item-title>德玛西亚</item-title>
                  <item-title-after>2014-12-23</item-title-after>
                </item-title-row>
                <item-sub-title>
                  网通二区
                </item-sub-title>
                <item-text>
                  德玛西亚，原为著名竞技游戏英雄联盟中的一个势力，也是中国区一个服务器（网通二区）的名称。
                </item-text>
              </item-content>
            </item>
            <item>
              <item-media>
                <img src="http://img3.imgtn.bdimg.com/it/u=1536560744,307047229&fm=21&gp=0.jpg"/>
              </item-media>
              <item-content>
                <item-title-row>
                  <item-title>德玛西亚</item-title>
                  <item-title-after>2014-12-23</item-title-after>
                </item-title-row>
                <item-sub-title>
                  网通二区
                </item-sub-title>
                <item-text>
                  诺克萨斯是著名竞技游戏《英雄联盟》中的势力名称，是坐落在瓦罗兰大陆远东中心的人类城邦，同时也是中国区服务器名称之一（别称：电信三区）
                </item-text>
              </item-content>
            </item>
            <item>
              <item-media>
                <img src="http://i1.17173cdn.com/9ih5jd/YWxqaGBf/forum/images/2013/10/16/174233sqpqp7zt7o71qu73.png"/>
              </item-media>
              <item-content>
                <item-title-row>
                  <item-title>艾欧尼亚</item-title>
                  <item-title-after>2014-12-23</item-title-after>
                </item-title-row>
                <item-sub-title>
                  电信一区
                </item-sub-title>
                <item-text>
                  《艾欧尼亚》是由Riot Games开发并由腾讯游戏代理的网络游戏《英雄联盟》中的势力名称，同时也是中国区服务器名称之一（别称：电信一区）；位于海岛上的城邦艾欧尼亚是寻求心灵进化的天堂。艾欧尼亚人天性和平。
                </item-text>
              </item-content>
            </item>
          </list>
        </card-content>
        <card-footer>
          <icon-button icon="favorite"></icon-button>
          <icon-button icon="share"></icon-button>
        </card-footer>
      </card>
    </content>
  </div>
</template>

<script>
export default{
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>

<style lang="css">
</style>
