<template>
  <div id="wrapper">
    <div class="title">
      Im PLAnt
    </div>
    <!-- 在模版文件中引用 
         利用v-on 绑定某个methods里的事件
    -->
   <Cell name="sib" @click="recevieClick"/> 
  </div>
</template>

<script>
  import Cell from 'components/Cell'  // 从文件中找到组件
  import { getExample } from 'services'
	export default {
    components: {
      Cell // 在components里面应用
    },

    created() {
       getExample().then(res => {
         console.log(res)
       })
    },

    data() {
      return {
        list: ['a', 'b']
      }
    },

    methods: {
      // 这里监听子组件的事情
      recevieClick(props) {
	      console.log('这里监听到了子组件')
	      console.log(props) // 这里接受到了子组件传过来的参数
      },

    }
  };
</script>
<style lang="stylus" scoped>
.title
  height 2rem
  background red
</style>
