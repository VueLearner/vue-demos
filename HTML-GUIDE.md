## 概述

每行代码应该看起来是由一个人编写的，不管贡献者的数量如何;

### 语法风格

* 缩进使用两个空格，使用 tab 时要转换成空格（soft tab）
  - 两个空格足以保证代码的清晰感，又比4空格更节约空间，尤其是在编写 JSX 时。
  - 保证在所有环境下展现一致
* 嵌套元素应该缩进一次（即两个空格）
* 块级元素应该独占一行

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Code Guide</title>
  </head>
  <body custom-attr="test">
    <div class="content">
      <h1><span>概述</span></h1>
      <img src="images/banner.jpeg">
      <p>每行代码应该看起来是由一个人编写的，不管贡献者的数量如何;</p>
    </div>
  </body>
</html>
```

* 属性名称应该小写，使用`-`连接；属性值使用双引号，不要使用单引号

```html
<div data-url="http://..." class="product">
```

* 不要省略可选的结束标签（如：`</li>`, `</p>`）

```html
<!-- 错误示范 -->
<p>不要省略可选的结束标签
```

```html
<!-- 正确示范 -->
<p>不要省略可选的结束标签</p>
```

* `meta`,`link`,`input`,`img`等自闭合元素的尾部不需要斜线
  - [HTML5](https://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 规范中明确说明这是可选的

```html
<!-- 正确示范 -->
<meta charset="UTF-8">
<img src="images/banner.jpeg">
<input type="text" name="username" value="">
```

* 使用 HTML5 doctype，不可省略

```html
<!DOCTYPE html>
```

* 引入 CSS 和 JavaScript 时，`style`和`script`元素不需要指定`type`属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。 - 强调


### 字符编码

通过明确声明字符编码，能够确保浏览器快速并容易的判断页面内容的渲染方式。应该采用 UTF-8 编码。

```
<meta charset="UTF-8">
```


### 语言属性 `lang`

> 强烈建议为 html 根元素指定 lang 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。—— 根据HTML5 规范

```html
<!-- 英文网页 -->
<html lang="en"></html>
<!-- 中文网页 -->
<html lang="zh-cn"></html>
```

### 布尔（boolean）型属性

布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。所以不需要赋值。

比如这两个都是选中的：

```html
<input type="checkbox" value="1" checked>
<input type="checkbox" value="1" checked="false">
```

### 优化建议

* 应该尽量减少标签总量和嵌套层级
* 尽量使用语义化的标签
```html

<!-- bad -->
<b>My page title</b>
<div class="top-navigation">
  <div class="nav-item"><a href="#home">Home</a></div>
  <div class="nav-item"><a href="#news">News</a></div>
  <div class="nav-item"><a href="#about">About</a></div>
</div>

<div class="news-page">
  <div class="page-section news">
    <div class="title">All news articles</div>
    <div class="news-article">
      <h2>Bad article</h2>
      <div class="intro">Introduction sub-title</div>
      <div class="content">This is a very bad example for HTML semantics</div>
      <div class="article-side-notes">I think I'm more on the side and should not receive the main credits</div>
      <div class="article-foot-notes">
        This article was created by David <div class="time">2014-01-01 00:00</div>
      </div>
    </div>

    <div class="section-footer">
      Related sections: Events, Public holidays
    </div>
  </div>
</div>

<div class="page-footer">
  Copyright 2014
</div>

<!-- good -->
<header>
  <!-- As this title belongs to the page structure it's a heading and h1 should be used -->
  <h1>My page title</h1>
</header>

<!-- All navigation should go into a nav element -->
<nav class="top-navigation">
  <!-- A listing of elements should always go to UL (OL for ordered listings) -->
  <ul>
    <li class="nav-item"><a href="#home">Home</a></li>
    <li class="nav-item"><a href="#news">News</a></li>
    <li class="nav-item"><a href="#about">About</a></li>
  </ul>
</nav>

<!-- The main part of the page should go into a main element (also use role="main" for accessibility) -->
<main class="news-page" role="main">
  <!-- A section of a page should go into a section element. Divide a page into sections with semantic elements. -->
  <section class="page-section news">
    <!-- A section header should go into a section element -->
    <header>
      <!-- As a page section belongs to the page structure heading elements should be used (in this case h2) -->
      <h2 class="title">All news articles</h2>
    </header>

    <!-- If a section / module can be seen as an article (news article, blog entry, products teaser, any other
     re-usable module / section that can occur multiple times on a page) a article element should be used -->
    <article class="news-article">
      <!-- An article can contain a header that contains the summary / introduction information of the article -->
      <header>
        <!-- As a article title does not belong to the overall page structure there should not be any heading tag! -->
        <div class="article-title">Good article</div>
        <!-- Small can optionally be used to reduce importance -->
        <small class="intro">Introduction sub-title</small>
      </header>

      <!-- For the main content in a section or article there is no semantic element -->
      <div class="content">
        <p>This is a good example for HTML semantics</p>
      </div>
      <!-- For content that is represented as side note or less important information in a given context use aside -->
      <aside class="article-side-notes">
        <p>I think I'm more on the side and should not receive the main credits</p>
      </aside>
      <!-- Articles can also contain footers. If you have footnotes for an article place them into a footer element -->
      <footer class="article-foot-notes">
        <!-- The time element can be used to annotate a timestamp. Use the datetime attribute to specify ISO time
         while the actual text in the time element can also be more human readable / relative -->
        <p>This article was created by David <time datetime="2014-01-01 00:00" class="time">1 month ago</time></p>
      </footer>
    </article>

    <!-- In a section, footnotes or similar information can also go into a footer element -->
    <footer class="section-footer">
      <p>Related sections: Events, Public holidays</p>
    </footer>
  </section>
</main>

<!-- Your page footer should go into a global footer element -->
<footer class="page-footer">
  Copyright 2014
</footer>
```
