baseURL = 'https://ovirgo.com/'
languageCode = 'zh-cn'
title = 'Virgo'

theme = 'virgo'
hasCJKLanguage = true
summaryLength = 80    # default 70
paginate = 24         # better 4 * 3 * times
enableGitInfo = true

[params]
    # active fadeIn animate when load page
    hasActiveAnimate = true      

    # show poems of home page
    showPoem = false

    # active cool style, be cool but take up more resources, and
    # if you want to replace default background image, just 
    # rename it `default.jpg` and place it into `/static/imgs/bg` dir, like `/static/imgs/bg/default.jpg`.
    hasActiveCool = false

    # For a better experience, we use localstorage to keep theme dark status, so
    # if you set dark as `true` but has no effect, you
    # should clear local storage of current site. And
    # in general, there has no any questions when you use it firstly.
    dark = false

    # Fold/Unfold code blocks, default `false`, and
    # if `true` ，all code blocks will be folded when page load.
    # It will be always true in Mobile view no matter what's your setting.
    hasFoldAllCodeBlocks = false

    # active english view, default chinese
    en = false

    slogan = 'Life is just a joker.'        # your site slogan below title

    # like the following items that you need create a relative markdown file
    # Search - search.md
    # Nav - nav.md 
    # Archive - archive.md
    # About - about.md or about/index.md
    # Idea posts/idea.md 
    # Wiki - posts/wiki.md
    [params.menu]
        search = true
        nav = true
        archive = true
        idea = false
        wiki = true
        about = true


    [params.svg]
        color = '#6c757d'                   # icon color of breadcrumb '#666'  # '#5a29e4' 
    
    [params.img]
        # Img of home page - if not jpg, rename it, and
        # place it inio `static/imgs/` dir
        # In-built : lightcolor, girl, wukong, and tux
        src = 'wukong'
        width = 960
        # and if not want to show img but some words, just 
        # comment `src = 'xxx'`, and input your words:
        # words = "Stay hungry, Stay foolish. Your time is limited, so don't waste it living someone else's life. Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. -- Steve Jobs."
        # words = "多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕。 -- 教员"

    [params.contact]
        icp = '豫ICP备2022002918号'          # beian number
        icplink = '//beian.miit.gov.cn'
        weibo = '6867589681'                # e.g. https://weibo.com/u/6867589681
        wechat = 'imgs/bg/wechat.jpg'       # Wechat QR, choose your path
        email = 'loveminimal@outlook.com'
        github = 'loveminimal'              # e.g. https://github.com/loveminimal
        bilibili = '11608450'               # e.g. https://space.bilibili.com/11608450
        # twitter = 'loveminimal'             # e.g. https://twitter.com/loveminimal
        # facebook = 'loveminimal'            # e.g. https://facebook.com/loveminimal
        # youtube = 'loveminimal'             # e.g. https://youtube.com/user/loveminimal
        color = '#696969'                   # icon color of contact #5d2f86

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
