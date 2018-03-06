# lv-simple-demo

> a simple demo for ours

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Git Commit Setup
```
  # git add . // 添加你的所有文件
  # git commit -m'這裡填寫你的步驟註釋' // 提交你的所有代碼至本地倉庫
  # git pull // 拉取線上代碼庫代碼
  # git push // 提交你的代碼至線上代碼庫
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 文件夹详解

```
 CSS-GUIDE.md // 一些css编写规范
 HTML-GUIDE.md // 一些HTML编写规范
 JS-GUIDE.md // 一些JS编写规范
  store => 封装了浏览器缓存的工具类 
    使用方式： import { setItem } from 'xxx/store'
  helper => 封装了一些通用的常用方法
    使用方式： import { funcA } from 'xxx/helper'
  pages => 页面写在这里
   例子：pages/example/index.vue
  route => 路由都在这里
    里面有对应的四个tabBarItem的各个路由，
    添加路由请相对应的子路由添加
  common => 里面存放了一些通用的样式或布局（一般不做修改）
```
