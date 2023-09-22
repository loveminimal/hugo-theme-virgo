---
title: "{{ replace .Name "-" " " | title }}"
aliases: 
tags: [_Misc]
date: {{ .Date | time.Format "2006-01-02" }}
time: {{ .Date | time.Format "15:04" }}
---

