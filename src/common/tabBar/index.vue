<template>

  <div id="wrapper" class="base-top-1px">
    <ul class="item-list">
      <li v-for="(item, index) in tabList" class="item" @click="itemClick(item.route)" :class="{'selected': currentIndex === index}">
          <div class="icon-wrapper" :class="'icon'+index"></div>
          <div class="title-wrapper">
            {{item.text }}
          </div>
      </li>
    </ul>
  </div>

</template>

<script>
	const ROUTES = ['planet', 'square', 'message', 'user']
	export default {
	  data() {
	    return {
	      tabList: [
          { text: '星球', route: ROUTES[0] },
          { text: '广场', route: ROUTES[1] },
          { text: '聊天', route: ROUTES[2] },
          { text: '用户', route: ROUTES[3] },
        ],
        numList: [2, 4, 6, 7],
        selectedIndex: 0
      }
    },
    methods: {
      itemClick(route) {
        this.$router.push({ name: route })
      }
    },
    computed: {
	  	currentIndex() {
	  		return ROUTES.indexOf(this.$route.name)
      }
    }

  };
</script>
<style lang="stylus" scoped>
  @import '../colors.styl'
  @import '../values.styl'

  tabHeight = 40px
  #wrapper
    height tabHeight
    .item-list
      display flex
      height 100%
      .item
        flex 1
        height 100%
        display flex
        flex-direction column
        align-items center
        padding-top 5px
        &.selected
          .title-wrapper
            color primary
          .icon-wrapper
            &.icon0
             background url(../../assets/imgs/tab_icon_planet_tint.svg) no-repeat
            &.icon1
              background url(../../assets/imgs/tab_icon_house_tint.svg) no-repeat
            &.icon2
              background url(../../assets/imgs/tab_icon_message_tint.svg) no-repeat
            &.icon3
              background url(../../assets/imgs/tab_icon_user_tint.svg) no-repeat
        .title-wrapper
          text-align center
          color ftCN
          font-size ftmd
        .icon-wrapper
          height 16px
          width 16px
          &.icon0
            background url(../../assets/imgs/tab_icon_planet.svg) no-repeat
          &.icon1
            background url(../../assets/imgs/tab_icon_house.svg) no-repeat
          &.icon2
            background url(../../assets/imgs/tab_icon_message.svg) no-repeat
          &.icon3
            background url(../../assets/imgs/tab_icon_user.svg) no-repeat

</style>
