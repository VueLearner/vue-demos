<template>
  <div id="wrapper">
    <div class="top">
      <div class="top-one">
        <img class="voice-logo" src="../../assets/imgs/voice.png">
      </div>
        <div class="top-two">
          <div class="choose">
            <ul class="text-title">
              <li class="text">关注</li>
            </ul>
            <ul class="dot">
              <li class="dot-dom" v-for="(item, index) in domList" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="search">
          <div class="search-in">
            <div class="search-logo-container">
              <img class="search-logo" src="../../assets/imgs/search.png"/>
            </div>
          <div class="search-font">
            <p class="search-font-p" >试试搜索beatbox</p>
          </div>
        </div>
      </div>
     <div class="moment">
    </div>
      </div>
  </div>
</template>

<script>

	export default {
	  data() {
      return {
        domList: ['。', '.', '。']
      }
    },
    components:{
    }
  }
</script>
<style lang="stylus" scoped>
// 因为标签有scoped所以样式被定义成局部化的了
// 只要小心一个页面的定义不要有相同的，就可以以这种形式定义样式，避免嵌套
@import '../../common/colors.styl'
@import '../../common/values.styl'
#wrapper
  .top
    width 100%
    height 90px
    position absolute
    background-color white
    box-shadow 0px 5px 20px bgcor
    z-index 99
    .top-one
      width 100%
      height 40%
      background-color white
      .voice-logo
        width 20px
        height 20px
        position absolute 
        right 10px
        top 10px
.top-two
  width 100%
  height 60%
  .choose
    width 60px
    height 100%
    margin-left 10px
    .text-title
      width 100%
      height 60%
      text-align center
      line-height 40px
      .text
        font-size fth3
.dot
  display flex
  flex-direction row
  justify-content space-between
  .dot-dom
    flex 1
    text-align center       
.container
  width 100% 
  height 620px
  overflow-y auto
  z-index 1
  .search
    width 100%
    height 40px
    margin-top 90px
    background-color whitesmoke
    position absolute
    .search-in
      width 340px
      height 26px
      background-color white
      position relative
      margin 7px auto
      border-radius 5px
      .search-logo-container
        float left
        margin 3px 10px
.search-logo
  width 20px
  height 20px
  .search-font
    float left
    line-height 26px
    .search-font-p
      font-size ftls
      color gary
.moment
  width 100%
  height 500px
  background-color seashell
</style>
