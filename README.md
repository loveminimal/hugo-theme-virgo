> 预览站点 [一杯玺茶xt - ovirgo.com](https://ovirgo.com/) 🥳

一个简单纯净的主题， 🎉🎉🎉 欢迎使用。

## 预览

**Cool 模式**

<img src="images/1.jpg" width="" style="float: left;" />

<img src="images/2.jpg" width="" style="float: left;" />


**Pure 模式**

<img src="images/q1.jpg" width="" style="float: left;" />

<img src="images/q2.jpg" width="" style="float: left;" />



## 内置功能

**1、即时高亮的目录层级：**

<img src="images/d1.jpg" width="" style="float: left;" />

<img src="images/d2.jpg" width="" style="float: left;" />


**2、简单强大的本地文章实时搜索：**

<img src="images/7.jpg" width="" style="float: left;" />

<img src="images/8.jpg" width="" style="float: left;" />



## 提示

你需要创建相应的 `.md` 文件，以生成对应的页面，保证页面的正确跳转。

| Markdown File        | Route      |
| -------------------- | ---------- |
| `content/nav.md`     | `/nav`     |
| `content/search.md`  | `/search`  |
| `content/archive.md` | `/archive` |

## 快速开始

首先，下载该主题。

```sh
cd YOUR_SITE_DIR	# 本地站点目录
git clone https://github.com/loveminimal/hugo-theme-virgo.git themes/virgo
# OR
cd YOUR_SITE_DIR/themes
git submodule add https://github.com/loveminimal/hugo-theme-virgo.git virgo
```

>使用哪种方式呢？如果你有这个疑问，那么就选择第一种。 😏

然后，更新你站点的 `config.toml` 内容，如下（后续可按需修改）：

```
baseURL = 'https://ovirgo.com/'
languageCode = 'zh-cn'
title = 'Virgo'

theme = 'virgo'
hasCJKLanguage = true
summaryLength = 80    # 默认 70
paginate = 24         # 建议为 4 和 3 公倍数
enableGitInfo = true

[params]
    author = '一杯玺茶xt'

    # active fadeIn animate when load page
    # 激活页面加载时的过渡动画
    hasActiveAnimate = true      

    # active cool style, be cool but take up more resources, and
    # if you want to replace default background image, just 
    # rename it `default.jpg` and place it into `/static/imgs/bg` dir, like `/static/imgs/bg/default.jpg`.
    # 激活 cool 模式，相对美观但是消耗资源也更多，
    # 如果想更换页面背景，只需要将图片命名为 `default.jpg` 后，置于 `/static/imgs/bg` 文件夹中即可，
    # 浏览器有缓存，更换后强制页面刷新（快捷键为 Ctrl+Shift+R）一下即可
    hasActiveCool = false

    # For a better experience, we use localstorage to keep theme dark status, so
    # if you set dark as `true` but has no effect, you
    # should clear local storage of current site. And
    # in general, there has no any questions when you use it firstly.
    # 激活暗色模式，
    # 由于静态页面的限制，我们使用浏览器本地存储来记忆该状态，
    # 如果设置为 `true` 后，默认不是暗色模式，清除浏览器缓存后刷新页面即可
    dark = false

    # Fold/Unfold code blocks, default `false`, and
    # if `true` ，all code blocks will be folded when page load.
    # It will be always true in Mobile view no matter what's your setting.
    # 展开/折叠代码块，默认不折叠，
    # 设置为 `true` ，则默认折叠所有代码块，
    # 提示，在移动设备中，系统设置为永久折叠代码块
    hasFoldAllCodeBlocks = false

    # active english view, default chinese
    # 页面语言，默认中文
    en = false

    slogan = 'Life is just a joker.'        # your site slogan below title

    # like the following items that you need create a relative markdown file
    # 如下导航链接，你应该创建对应的 markdown 文件，以生成对应的页面
    # -----------------------------------
    # Search - search.md
    # Nav - nav.md 
    # Archive - archive.md
    # About - about.md or about/index.md
    # Idea posts/idea.md 
    # Wiki - posts/wiki.md
    # -----------------------------------
    # Now, you can customize the menu as you want, and
    # update the order index number like 00,01,23... you can sort the items.
    # ⚓🐶🎉👀💡👓🐌
    [params.menu]
        [params.menu.00]
            active = true
            path = '/nav'
            en = 'Nav'
            zh = '导航'
            icon = '🎯'
        [params.menu.11]
            active = true
            path = '/search'
            en = 'Search'
            zh = '搜索'
            icon = '🔎'
        [params.menu.22]
            active = true
            path = '/posts'
            en = 'Posts'
            zh = '文章'
            icon = '📜'
        [params.menu.33]
            active = true
            path = '/archive'
            en = 'Archive'
            zh = '归档'
            icon = '🎉'
        [params.menu.44]
            active = true
            path = '/posts/wiki'
            en = 'Wiki'
            zh = '百科'
            icon = '🚀'
        [params.menu.55]
            active = true
            path = '/about'
            en = 'About'
            zh = '关于'
            icon = '🐌'

    [params.svg]
        color = '#6c757d'                   # icon color of breadcrumb '#666'  # '#5a29e4' 
    
    [params.img]
        # Img of home page - if not jpg, rename it, and
        # place it inio `static/imgs/` dir
        # In-built : lightcolor, girl, wukong, and tux
        # src = 'wukong'
        width = 999
        # and if not want to show img but some words, just 
        # comment `src = 'xxx'`, and input your words:
        # words = "Stay hungry, Stay foolish. <br>Your time is limited, so don't waste it living someone else's life. <br>Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. <br>-- Steve Jobs."
        # words = "多少事，从来急；<br>天地转，光阴迫。<br>一万年太久，只争朝夕。<br>-- 教员"
        words = "“照顾好自己的身体和情绪，<br>这场人生，<br>你就赢了一大半，<br>其余的其余，<br>人生自有安排。”"

    [params.contact]
        icp = '豫ICP备2022002918号-1'          # beian number
        icplink = '//beian.miit.gov.cn'
        weibo = '6867589681'                # e.g. https://weibo.com/u/6867589681
        wechat = 'imgs/bg/wechat.jpg'       # Wechat QR, choose your path
        email = 'loveminimal@outlook.com'
        github = 'loveminimal'              # e.g. https://github.com/loveminimal
        bilibili = '11608450'               # e.g. https://space.bilibili.com/11608450
        # twitter = 'loveminimal'             # e.g. https://twitter.com/loveminimal
        # facebook = 'loveminimal'            # e.g. https://facebook.com/loveminimal
        # youtube = 'loveminimal'             # e.g. https://youtube.com/user/loveminimal
        # telegram = 'https://web.telegram.org/z/'
        color = '#696969'                   # icon color of contact #5d2f86
        isShowSlogan = true                 # e.g.  show 'Contact me via : )'

[markup]
    [markup.asciidocExt]
        preserveTOC = true
    [markup.highlight]
        style = "github"
        lineNos = false
    [markup.tableOfContents]
        endLevel = 3
        ordered = false
        startLevel = 2
    [markup.goldmark]
        [markup.goldmark.renderer]
            unsafe = true

```

如果，你想使用导航页，那么就应该严格按照下面这种格式搭建你的 `nav.md` 文件结构：

```md
---
title: "Nav"
draft: false
---

## ⚓ 

⚓ O virgo, just do the right thing S.
<div class="nav">

🌞 我的 MINE
- [mineitem one](/)
- [mineitem two](/archive)
- [mineitem three](https://nav-item-three.com)
 

🔨 工具 TOOLs
- [toolitem three](https://nav-item-three.com)


📑 文档 DOCs
- [docitem one](/)
- [docitem two](/archive)
- [docitem three](https://nav-item-three.com)

🍺 博客 BLOGs
- [blogitem one](/)
- [blogitem two](/archive)
- [blogitem three](https://nav-item-three.com)

🎉 休闲 LEISURE
- [leisureitem one](/)
- [leisureitem three](https://nav-item-three.com)

🎧 影视 MOVIEs
- [movieitem one](/)
- [movieitem three](https://nav-item-three.com)

🧲 友链 LINKs
- [navitem two](/archive)
- [navitem three](https://nav-item-three.com)

</div>

## 🔖 

🔖 Bookmarks InboX

<div class="bookmark">

- bookmark item one https://bookmark-item-one.com
- bookmark item two https://bookmark-item-two.com
- bookmark item three https://bookmark-item-three.com

</div>
```

现在，运行 `hugo server -D` 开始你的折腾之旅吧。
