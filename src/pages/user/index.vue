<template>

  <div id="wrapper">
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
    <p @click="change">change data</p>
  </div>

</template>

<script>
	export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      const dataList = ['a', 'b', 'c', 'd']
      this.list = dataList
//      let url = 'http://localhost:3000/api/data'
        //this.axios.post(url, params).then(res=> {
//        console.log(res)
//      }).catch(error => {
//        console.log('error')
//      })
    },
    methods: {
      change() {
        console.log('here')
        this.list = ['1', '2', '3', '4']
      }
    }

  };
</script>
<style lang="stylus" scoped>

</style>
