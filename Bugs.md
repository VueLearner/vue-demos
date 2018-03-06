#这里记录了一堆bug

03-06


1.yarn start 时遇到的问题:
  not post-css config found in 'xxxxx'

  解决方案：在对应的路径添加了一个postcss.config.js文件
2.Vue is not defined
  解決方案： 找到對應文件對VUE的引用，添加：
  import Vue from 'vue'