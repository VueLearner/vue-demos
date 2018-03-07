<template>

  <div id="wrapper">
      <div class="top">
         <div class="top-one">
           <img class="voice-logo" src="../../assets/imgs/voice.png"/>
         </div>
         <div class="top-two">
            <div  class="choose">
               <p class="choose-text">推荐</p>
                <ul class="circle-ul">
                  <li class="circle-li">。</li>
                  <li class="circle-li">·</li>
                  <li class="circle-li">。</li>
                </ul>
            </div>
         </div>
      </div>
      <div class="container">
         <div class="search">
            <div class="search-in">
              <img src=""/>

            </div>
         </div>

      </div>

  </div>

</template>

<script>
	export default {
	    data(){
	        return{

            }
        }
    };
</script>
<style lang="stylus" scoped>
  @import '../../common/colors.styl'
  @import '../../common/values.styl'
    .top
      width 100%
      height 80px
      border-bottom 1px solid bdcor
      /*background-color slateblue*/
      border-shadow 10px 10px 5px #888888
      .top-one
        width 100%
        height 30px
        /*background-color aliceblue*/
        .voice-logo
          height 16px
          width 16px
          float right
          padding 10px 15px
      .top-two
        width 100%
        height 50px
        /*background-color wheat*/
        .choose
          width 50px
          height 50px
          /*background-color white*/
          margin-left 15px
          .choose-text
            width 100%
            height 30px
            text-align center
            padding-top 5px
            font-size fth3
          .circle-ul
            width 100%
            height 15px
            display flex
            .circle-li
              flex 1
              text-align center
              line-height 100%
    .container
      width 100%
      height 545px
      background-color ghostwhite
      .search
         width 100%
         height 20px
         background-color bdcor
         position absolute
         padding 10px 5%

         .search-in
            width 90%
            height 20px
            background-color white
            position relative




</style>
