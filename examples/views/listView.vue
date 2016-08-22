<template>
  <div class="page">
    <header-bar>
      <action slot="left" @click="back()">
        <icon value="arrow_back"></icon>
      </action>
      <span>List View</span>
    </header-bar>
    <content>
      <content-block>
        <p>
          Vue Carbon 是基于 flexbox 的布局，可以组织完成各种灵活的列表项，而且可以跟icon， image 等元素完美结合。
        </p>
      </content-block>

      <content-title>
        默认的
      </content-title>
      <list>
        <item-cell>
          <item-media><i class="logo">C</i></item-media>
          <item-title>普通的</item-title>
        </item-cell>
        <item-cell>
          <item-media><i class="logo">C</i></item-media>
          <item-title>后面有数字的</item-title>
          <item-title-after>23</item-title-after>
        </item-cell>
        <item-cell>
          <item-media><i class="logo">C</i></item-media>
          <item-title>后面有徽章的</item-title>
          <item-title-after>
            <badge value="23"></badge>
          </item-title-after>
        </item-cell>
      </list>

      <content-title>
        带点击标记的
      </content-title>
      <list>
        <item-cell link>
          <item-media><i class="logo">C</i></item-media>
          <item-title>普通的</item-title>
        </item-cell>
        <item-cell link>
          <item-media><i class="logo">C</i></item-media>
          <item-title>后面有数字的</item-title>
          <item-title-after>23</item-title-after>
        </item-cell>
        <item-cell link>
          <item-media><i class="logo">C</i></item-media>
          <item-title>后面有徽章的</item-title>
          <item-title-after>
            <badge value="23"></badge>
          </item-title-after>
        </item-cell>
      </list>

      <content-title>
        分隔的
      </content-title>
      <list>
        <item-divider>英雄联盟</item-divider>
        <item-cell>
          <item-title>德玛西亚之力</item-title>
        </item-cell>
        <item-cell>
          <item-title>诺克萨斯之手</item-title>
        </item-cell>
        <item-divider>守望先锋</item-divider>
        <item-cell link>
          <item-title>麦克雷</item-title>
          <item-title-after>23</item-title-after>
        </item-cell>
        <item-divider>其它的</item-divider>
        <item-cell link>
          <item-media><i class="logo">C</i></item-media>
          <item-title>穿越火线</item-title>
          <item-title-after>
            <badge value="23"></badge>
          </item-title-after>
        </item-cell>
      </list>

      <content-title>更多的信息</content-title>
      <list>
        <item>
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

      <content-title>加上图片</content-title>
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
.ks-grid div[class*="col-"] {
    background: #fff;
    text-align: center;
    color: #000;
    border: 1px solid #ddd;
    padding: 5px;
    margin-bottom: 15px;
}
</style>
