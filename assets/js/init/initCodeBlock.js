import $ from '../libs/jquery.min';
import isMobile from 'js/utils/isMobile';

export default function initCodeBlock() {
	const _arr = $('pre code');

	_arr.each(function (idx) {
		let _lang = $(this).attr('data-lang');

		if (!_lang) return;

		// $(this).parents('.highlight').before(`<div class="lang">${!isMobile() ? _lang : '✡︎'}</div>`) //  ✡︎
		$(this).parents('.highlight').before(`<div class="lang">${_lang}</div>`) //  ✡︎
	})
}