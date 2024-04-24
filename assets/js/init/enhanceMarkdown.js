import $ from 'js/libs/jquery.min';

export default function() {
	$('em').each((idx, item) => {
		// console.log(item.outerHTML)

		let _innerText = item.innerHTML;

		if (_innerText.indexOf('_') === 0) {
			// ^ *_xxx* 转译为 <u>xxx</u>
			item.outerHTML = `<u>${_innerText.slice(1)}</u>`

		} else if (_innerText.indexOf('=') === 0) {
			// ^ *-xxx* 转译为 <span class="oh-hl">xxx</span>
			item.outerHTML = `<span class="oh-hl">${_innerText.slice(1)}</span>`
			// console.log($('.oh-hl')[idx]);
		} 
		// else if (_innerText.indexOf('=') === 0) {
		// 	// ^ *=xxx* 转译为 <div class="oh-essay">xxx</div>
		// 	item.outerHTML = `<div class="oh-essay">${_innerText.slice(1)}</div>`
		// }
	})

	$('blockquote p').each((idx, item) => {
		let _innerHtml = item.innerHTML;
		// console.log(_innerHtml);

		if (_innerHtml.indexOf('::') === 0) {
			// console.log(_innerHtml);
			item.parentNode.setAttribute('class', 'oh-essay')

			// ^ >=xxx 转译为 <blockquote><div class="oh-essay">xxx</div></blockquote>
			// item.parentNode.outerHTML = `<div class="oh-essay">${_innerHtml.slice(2)}</div>`
			item.outerHTML = `<div>${_innerHtml.slice(2)}</div>`
		}
	})

	// 标签钉样式，类似于 `> *` 的格式，
	// 标识 .oh-tag ，渲染样式 
	$('code').each((idx, item) => {
		let _innerHtml = item.innerHTML;
		// console.log('>>> ', _innerHtml);
		if (_innerHtml.indexOf('&gt; ') === 0 || _innerHtml.indexOf('> ') === 0) {
			// console.log(_innerHtml);
			item.setAttribute('class', 'oh-tag')
		}
	})

	// 标识渲染 Obsidian 等 Wiki 语法的图片、链接
	// 支持中文路径
	$('.content, .list').each((idx, item) => {
		// console.log(item.outerHTML)
		// console.log(item.innerHTML)
		let _innerHtml = item.innerHTML;

		if(_innerHtml.indexOf('[[') > -1) {
			// console.log('>>>', _innerHtml)

			// 1. 先匹配替换图片
			// let _re = /!\[\[(\w*\/?\w+\.\w+)\|?(\d*)\]\]/
			let _re = /!\[\[(([\/\-\.\*\$\&\:]|\w|\s|[^\x00-\xff])*\.\w+)\s*\|?\s*(\d*)\]\]/g;
			// let _str = _innerHtml.match(_re, "$1, $3");
			// 此处默认图片链接为根引用方式，即 /assets/*
			// let _str = _innerHtml.replace(_re, '<img src="$1" alt="$1" width="$3" />');
			let _str = _innerHtml.replace(_re, '<img src="$1" alt="$1" width="$3" />');
			// item.innerHTML = _str;

			// 2. 后匹配替换链接
			let _reLink = /\[\[(([\/\-\.\*\$\:\#]|\w|\s|[^\x00-\xff])*)\|?(([\/\-\.\*\$]|\w|\s|[^\x00-\xff])*)\]\]/g;
			// let _strLink = _str.match(_reLink);
			// let _strLink = _str.replace(_reLink, '<a href="$1">$3</a>');
			let _strLink = _str.replace(_reLink, (val) => {
				val = val.replace(/[\[\]]/g, '')
				let _arr = val.split(/\s*\|\s*/)
				let _relLink = _arr[0]
				let _desc = _arr[1] ? _arr[1] : _arr[0]

				// 检查链接描述是否包含 #锚点，形式有（我们假设当前文章名称为 test ，它有一个章节 ttt）：
				// - 2.1. 孙子兵法#军争篇 - 此类可以正常识别
				// - 2.2. cpu-是如何制造出来的#18.-等级测试 - https://example.com/cpu-是如何制造出来的#18.-等级测试 ，
				//        此类锚点中包含特殊符号 `.` ，在新标签中打开，且无法正确定位到锚点
				// - 2.3 test#ttt - https://example.com/test#ttt 默认会在新标签页中打开，需要优化为在当前页面滚动
				// - 2.4  #ttt - 不能正常，会翻译为 https://example.com/#ttt ，丢失了当前页面路径
				let _idx = _desc.indexOf('#');
				if (_idx > -1) {
					// 2.4
					if (_idx == 0) {
						_relLink = location.pathname.slice(1) + _desc

					} else {
						// 2.3
						_relLink = _desc.replace('#','/#')
						
						// 2.2
						_relLink = _relLink.replace(/[\.\、]/g, '')
					}
				}

				// console.log(_arr);
				// console.log(_desc);
				// return `<a href="${_arr[0]}">${_desc}</a>`
				return `<a href="/${_relLink.replace(/\s/g, '-').toLowerCase()}">${_desc}</a>`
			// });
			});

			item.innerHTML = _strLink;
		}
	})
}