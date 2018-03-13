<template>
  <div @click="handleClick">
    这是一个组件例子，名字叫{{name}}
  </div>
</template>
<script type="text/javascript">
  export default {
    props: {
      // 父组件传入子组件的属性
      name: {
        type: String,
        default: '例子',
        validator: (val) => val !== ''
      }
    },
    data() {
      return {
      }
    },
    methods: {
      handleClick() {
        let params = { name: 'aaaaa', age: 18 }
        this.$emit('click', params) // 用$emit提交一个事件给父组件
      }
    }
  }
</script>
<style type="text/css" lang="stylus" scoped>
  
</style>