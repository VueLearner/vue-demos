<template>
  <div id="app">
    <div class="router-wrapper">
      <router-view/>
    </div>
    <div class="tabWrapper">
      <TabBar></TabBar>
    </div>
  </div>
</template>

<script>
import TabBar from '@c/tabBar'
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style lang="stylus">
  #app
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    .router-wrapper
      position absolute
      top 0
      bottom 50px
      left 0
      right 0
    .tabWrapper
      position absolute
      bottom 0
      left 0
      right 0
</style>
