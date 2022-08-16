import $ from '../libs/jquery.min';
import parseSiteParams from '../utils/parseSiteParams';
import isMobile from 'js/utils/isMobile';

export default function initCodeBlock() {
	// const _arr = $('.highlight pre code');
	const _arr = $('pre code');

	_arr.each(function (idx) {
		// let isShow = true;	// 初始化是否显示代码块
		let isShow = !parseSiteParams().hasFoldAllCodeBlocks;

		// 移动端全部默认折叠代码块
		if (isMobile()) isShow = false;

		let _this = $(this);
		let _lang = $(this).attr('data-lang');
		let _id = _lang + idx;


		// 模拟一个折叠板的功能，当
		// _lang 类 `_xxx`时，默认为折叠板，其中 `xxx` 为折叠板描述
		if (!_lang) return;
		if (_lang[0] === '_' && _lang[1] !== '_') {
			_lang = _lang.slice(1);
			isShow = false;
		}
		
		if (_lang[0] === '_' && _lang[1] === '_') {
			_lang = _lang.slice(2);
			isShow = false;
			_this.addClass('oh-xyx')
			_this.css('white-space', 'pre-wrap')
		}

		if (!isShow) _this.css('display', 'none');

		$(this).before(`<div class="lang" id="${_id}">${isShow ? _lang + ' ▽' : _lang + ' ▷'}</div>`)
		let _langEle = $('#' + _id);

		_langEle.click(function () {
			_this.toggle();
			isShow = !isShow;
			_langEle.html(isShow ? `${_lang} ▽` : `${_lang} ▷`)
		});

	})
}