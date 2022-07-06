import $ from '../libs/jquery.min';

export default function initCodeBlock() {
	const _arr = $('.highlight pre code');

	_arr.each(function(idx) {
		let isShow = true;	// 初始化是否显示代码块
		
		let _this = $(this);
		let _lang = $(this).attr('data-lang');
		let _id = _lang + idx;
		
		if (!isShow) _this.css('display', 'none');
		
		$(this).before(`<div class="lang" id="${_id}">${isShow ? _lang + ' ▽' : _lang + ' ▷'}</div>`)
		let _langEle = $('#' + _id);

		_langEle.click(function() {
			_this.toggle();
			isShow = !isShow;
			_langEle.html(isShow ? `${_lang} ▽` : `${_lang} ▷`)
		});

	})
}