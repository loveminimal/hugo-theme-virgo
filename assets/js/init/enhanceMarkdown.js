import $ from 'js/libs/jquery.min';

export default function() {
	$('em').each((idx, item) => {
		// console.log(item.outerHTML)

		let _innerText = item.innerHTML;

		if (_innerText.indexOf('_') === 0) {
			// ^ *_xxx* 转译为 <u>xxx</u>
			item.outerHTML = `<u>${_innerText.slice(1)}</u>`

		} else if (_innerText.indexOf('-') === 0) {
			// ^ *-xxx* 转译为 <span class="oh-hl">xxx</span>
			item.outerHTML = `<span class="oh-hl">${_innerText.slice(1)}</span>`
			console.log($('.oh-hl')[idx]);

		} else if (_innerText.indexOf('=') === 0) {
			// ^ *=xxx* 转译为 <div class="oh-essay">xxx</div>
			item.outerHTML = `<div class="oh-essay">${_innerText.slice(1)}</div>`
		}
	})
}