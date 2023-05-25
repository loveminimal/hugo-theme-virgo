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
			console.log(_innerHtml);
			item.parentNode.setAttribute('class', 'oh-essay')

			// ^ >=xxx 转译为 <blockquote><div class="oh-essay">xxx</div></blockquote>
			// item.parentNode.outerHTML = `<div class="oh-essay">${_innerHtml.slice(2)}</div>`
			item.outerHTML = `<div>${_innerHtml.slice(2)}</div>`
		}
	})

	// 标识渲染 Obsidian 等 Wiki 语法的图片、链接
	// 支持中文路径
	$('p, .summary').each((idx, item) => {
		// console.log(item.outerHTML)
		// console.log(item.innerHTML)
		let _innerHtml = item.innerHTML;

		if(_innerHtml.indexOf('[[') > -1) {
			// console.log('>>>', _innerHtml)

			// 1. 先匹配替换图片
			// let _re = /!\[\[(\w*\/?\w+\.\w+)\|?(\d*)\]\]/
			let _re = /!\[\[(([\/\-\.\*\$]|\w|\s|[^\x00-\xff])*\.\w+)\s*\|?\s*(\d*)\]\]/g;
			// let _str = _innerHtml.match(_re, "$1, $3");
			let _str = _innerHtml.replace(_re, '<img src="$1" alt="$1" width="$3" />');
			// item.innerHTML = _str;

			// 2. 后匹配替换链接
			let _reLink = /\[\[(([\/\-\.\*\$\:]|\w|\s|[^\x00-\xff])*)\|?(([\/\-\.\*\$]|\w|\s|[^\x00-\xff])*)\]\]/g;
			// let _strLink = _str.match(_reLink);
			// let _strLink = _str.replace(_reLink, '<a href="$1">$3</a>');
			let _strLink = _str.replace(_reLink, (val) => {
				val = val.replace(/[\[\]]/g, '')
				let _arr = val.split(/\s*\|\s*/)
				let _desc = _arr[1] ? _arr[1] : _arr[0]
				return `<a href="${_arr[0]}">${_desc}</a>`
			});

			item.innerHTML = _strLink;
		}
	})
}