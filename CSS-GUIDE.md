## 概述

每行代码应该看起来是由一个人编写的，不管贡献者的数量如何;

## 语法风格

* 缩进使用两个空格，使用 tab 时要转换成空格（soft tab）
  - 保证在所有环境下展现一致
* 为选择器分组时，将单独的选择器单独放在一行

```css
/* 错误示范 */
.selector, .selector-secondary, .selector[type=text] {
  width: 100px;
}
```

```css
/* 正确示范 */
.selector,
.selector-secondary,
.selector[type=text] {
  width: 100px;
}
```

* 为了代码的易读性，在每个声明块的左花括号前添加一个空格
* 每条声明语句的`:`后应该插入一个空格
* 每条声明应该独占一行
* 每条声明语句都应当以分号结尾
* 对于属性值或颜色参数，省略小于 1 的小数前面的 0
* 对于以逗号分隔的属性值，每个逗号后面都应该插入一个空格

```css
/* 正确示范 */
.selector {
  background-color: rgba(0, 0, 0, .5);
}
```

* 十六进制值统一小写
* 尽量使用简写形式的十六进制值，例如，用 #fff 代替 #ffffff
* 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;
* url 的内容不需要引号

```css
.bg {
    background-image: url(../images/bg.png);
}
```

* 需要使用引号时应该使用双引号

```css
.test:after {
    content: "";
}
```

### class 命名

模块化编写 CSS，将页面按模块划分。子模块的 class 使用父模块的 class 做前缀。

* 使用驼峰命名法。

```css
.userProfile
```

* 父子模块之前使用 `--` 连接。

```css
.userProfile--avatar
```

* 表示状态的部分使用`-`连接

```css
.userProfile--avatar-active
```

* 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。

### 带前缀的属性
当使用特定厂商的带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐，这样便于多行编辑。
如果使用autoprefixer插件，可忽略这一项

```css
/* Prefixed properties */
.selector {
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
          box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}
```

### 单行规则声明
对于只包含一条声明的样式，为了易读性和便于快速编辑，建议将语句放在同一行。对于带有多条声明的样式，还是应当将声明分为多行。

这样做的关键因素是为了错误检测 -- 例如，CSS 校验器指出在 183 行有语法错误。如果是单行单条声明，你就不会忽略这个错误；如果是单行多条声明的话，你就要仔细分析避免漏掉错误了。

```css
/* Single declarations on one line */
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }

/* Multiple declarations, one per line */
.sprite {
  display: inline-block;
  width: 16px;
  height: 15px;
  background-image: url(../img/sprite.png);
}

.icon           { background-position: 0 0; }
.icon-home      { background-position: 0 -20px; }
.icon-account   { background-position: 0 -40px; }
```

### 优化建议

* 不要使用 ID 选择器
* 少使用标签选择器
  - 影响了子孙的同名标签，不利于扩展
  - 重用性低
  - 更换标签很麻烦
* * 选择器层级不要太深
* 少使用层级选择器
  - CSS是从右至左渲染的，层级多了效率低
  - 层级太深太多CSS文件也会变大
  - 重用性低
  - 无意提高了的优先级
* 不要使用组合选择器，如：div.selector

## 属性声明顺序

### 结构性属性：
  * display
  * position, left, top, right, bottom
  * overflow, float, clear
  * margin, padding
  * border


### 表现性属性：
  * background, border
  * font, text

```css

/* bad */
.box {
  font-family: 'Arial', sans-serif;
  border: 3px solid #ddd;
  left: 30%;
  position: absolute;
  text-transform: uppercase;
  background-color: #eee;
  right: 30%;
  isplay: block;
  font-size: 1.5rem;
  overflow: hidden;
  padding: 1em;
  margin: 1em;
}

/* good */
.box {
  display: block;
  position: absolute;
  left: 30%;
  right: 30%;
  overflow: hidden;
  margin: 1em;
  padding: 1em;
  background-color: #eee;
  border: 3px solid #ddd;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
}
```
