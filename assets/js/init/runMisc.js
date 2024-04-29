import $ from 'js/libs/jquery.min';
import MD5 from 'js/libs/md5-es.min';

// 根据输入文本生成一个 16 进制的颜色
function getMD5Color(str, len = 6) {
	return '#' + MD5.hash(str).slice(0, len);
}

export default function () {

	let freqNavLinkEle = `<div class="freq"></div>`;
	$('.content-nav').prepend(freqNavLinkEle);
	// 渲染空链接导航选项
	$('.content-nav table td').each((idx, item) => {
		// console.log(item.innerHTML);
		if (!item.innerHTML) {
			item.innerHTML = `<a style='border: 1px dashed #3333;'><span style='opacity: 0;'>.</span></a>`;
		} else {
			// console.log(item.innerText);
			if (item.innerText.startsWith('>')) {
				// console.log(item.innerHTML);
				$(item).addClass('frequtent')
				let _text = item.innerText.slice(1).trim();
				item.children[0].innerText = _text;
				let _aClone = $(item.children[0]).clone();
				// 考虑到将 `>` 放在链接前而不是链接内的情况，以
				// 满足 `> [[ obsidian 内链 ]]` 这种形式，以
				// 方便将常用文章链接也 PIN 在顶部，这里
				// 我们移除多余信息，只保留链接（清除内部所有元素）
				$(item).empty().append(_aClone);
				

				let _color = getMD5Color(_text) + '66';	// '66' 为透明度 00 ~ FF
				let _ele = $(item.children[0]).clone().append(`<div class="color-ball" style="background: ${_color};"></div>`)
				item.children[0].style = `border-left: 5px solid ${_color};`
				// _ele[0].style = `background: ${_color};`
				// _ele[0].style = `border: 2px solid ${_color};`
				// _ele[0].style = `box-shadow: 1px 1px 3px ${_color};`
				// _ele[0].style = `background: linear-gradient(45deg,#dd669922, ${getMD5Color(_text)}22 50%, #8cc6d122);`
				// _ele[0].style = `background: linear-gradient(45deg,#77889922 10%, ${getMD5Color(_text)}22 50%, #aabbcc22 90%);`

				$('.freq').append(_ele)
			}
		}
	})

	// 默认在新标签页中打开超链接 <base target="_blank">，
	// 除相关文章、目录导航两个区域
	$('.rel a, .toc a').each((idx, item) => item.target = '_self')
}