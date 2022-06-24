It's just a simple & pure theme. 🎉🎉🎉

## Overview

![tn](./images/tn.png)

## Quick Start

First, let's try to start a interesting journey.

```sh
cd YOUR_SITE_DIR	# your local site workspace
git clone https://github.com/loveminimal/hugo-theme-virgo.git themes/virgo
# OR
cd YOUR_SITE_DIR/themes
git submodule add https://github.com/loveminimal/hugo-theme-virgo.git virgo
```

> Which one to choose? If you have this question, just choose the first. 😏

Then, update your `config.toml` of site, like this:

```
baseURL = 'https://ovirgo.com/'
languageCode = 'zh-cn'
title = 'Virgo'

theme = 'virgo'
hasCJKLanguage = true
summaryLength = 80    # default 70
paginate = 12

[params]
    slogan = 'Life is just a joker.'       # your site slogan below title
    # like the following items that you need create a relative markdown file
    # Search - search.md
    # Nav - nav.md 
    # Idea posts/idea.md 
    # Wiki - posts/wiki.md
    hasMoreMenuItems = true
    [params.contact]
        icp = '豫ICP备2022002918号'          # beian number
        weibo = '6867589681'                # e.g. https://weibo.com/u/6867589681
        wechat = 'bg/wechat.jpg'            # Wechat QR, chose your path
        email = 'loveminimal@outlook.com'
        github = 'loveminimal'              # e.g. https://github.com/loveminimal
        bilibili = '11608450'               # e.g. https://space.bilibili.com/11608450

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

Now, just run `hugo server -D` to enjoy it.
