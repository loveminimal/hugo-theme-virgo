// 定制页眉背景色
import $ from '../libs/jquery.min';

export default function colorHeader() {
	let _curScroll = $(this).scrollTop() + 48;
	// console.log(_curScroll)
	if (_curScroll > 120) {
		$('#header').addClass('js-header')
	} else {
		$('#header').removeClass('js-header')
	}
}