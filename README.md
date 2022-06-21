---
date: 2022-06-21 21:02
author: Jack Liu
---

It's just a simple & pure theme.

## Overview

![tn](./images/tn.png)

## Quick Start

First, let's try to start a interesting journey.


```sh
cd YOUR_SITE_DIR	# your local site workspace
git clone https://github.com/loveminimal/virgo.git themes/virgo
```

Then, update your `config.toml` of site, like this:

```
baseURL = 'https://ovirgo.com/'
languageCode = 'zh-cn'
title = 'Virgo'


# The following configurations are necessary
theme = 'virgo'
hasCJKLanguage = true
summaryLength = 80              # default 70

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
