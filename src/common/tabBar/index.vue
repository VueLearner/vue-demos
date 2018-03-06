<template>

  <div id="wrapper">
    <ul class="item-list">
      <li v-for="(item, index) in tabList" class="item" @click="itemClick(item, index)" :class="{'selected': selectedIndex === index}">
          <div class="icon-wrapper"></div>
          <div class="title-wrapper">
            {{item.text }}
          </div>
      </li>
    </ul>
  </div>

</template>

<script>
	export default {
	  data() {
	    return {
	      tabList: [
          {text: '首页', route: 'user'},
          {text: '消息', route: 'message'},
          {text: '日历', route: 'calender'},
          {text: '我的收藏', route: 'message'},
        ],
        numList: [2, 4, 6, 7],
        selectedIndex: 0
      }
    },
    created() {

    },
    methods: {
      itemClick(item, index) {
        this.$router.push({ name: item.route })
        this.selectedIndex = index
      }
    },

  };
</script>
<style lang="stylus" scoped>
  tabHeight = 40px
  #wrapper
    height tabHeight
    .item-list
      display flex
      height 100%
      .item
        flex 1
        height 100%
        &.selected
          background-color rgb(47, 118, 250)
          .title-wrapper
            color white
        .title-wrapper
          text-align center
          line-height tabHeight
          color #E6E6E6

</style>
