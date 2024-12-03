import $ from '../libs/jquery.min';
import isMobile from 'js/utils/isMobile';

export default function initCodeBlock() {
	const _arr = $('pre code');

	_arr.each(function (idx) {
		let _lang = $(this).attr('data-lang');

		if (!_lang) return;

		if (!_lang.startsWith('_')) {
			// ^ 非 _ 开头的代码块，在代码块前增加语言标签
			// $(this).parents('.highlight').before(`<div class="lang">${!isMobile() ? _lang : '✡︎'}</div>`) //  ✡︎
			$(this).parents('pre').before(`<div class="lang">${_lang}</div>`) //  ✡︎

		} else {
			_lang = _lang.slice(1);

			if (!_lang.startsWith('_')) {
				// ^ 非 __ 开头的代码块，在代码块前增加一个折叠标签（代码块样式）
				$(this).parents('pre').before(`
					<details>
						<summary>${_lang}</summary>
						<pre>${$(this).html()}</pre>
					</details>
				`)
			} else {
				// ^ 以 __ 开头的代码块，在代码块前增加一个折叠标签（引用样式）
				$(this).parents('pre').before(`
					<details>
						<summary>${_lang.slice(1)}</summary>
						<blockquote>${$(this).html()}</blockquote>
					</details>
				`)
			}

			$(this).parents('pre').remove();
		}
	})
}