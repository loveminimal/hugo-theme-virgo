import $ from '../libs/jquery.min';
import isMobile from '../utils/isMobile';

let blankLiItem = `<li><a></a></li>`
let col = !isMobile() ? 5 : 2;

export default function initNavLink() {
	if (location.href.indexOf('nav') < 0) return;

	// Navigation
	$('.content-nav .nav ul').each((idx, item) => {

		let _itemLen = item.children.length;

		let _prevEle = $(item).prev();
		_prevEle.html(_prevEle.html() + ` <sup>「${_itemLen}」</sup>`)


		let _len = col - (_itemLen % col ? _itemLen % col : col);
		for (let j = 0; j < _len; j++) {
			item.innerHTML = item.innerHTML + blankLiItem;
		}
	})

	// Bookmark
	let _bmLen = $('.content-nav .bookmark ul')[0].children.length;
	
	let _st =  '<div style="float: right; font-size: 13px;">「' + 
		(_bmLen > 100 ? 'Alert... 😈😈😈' : 'Good... 🥳🥳🥳') + 
		'」</div>';
	let _prevEle = $('.content-nav .bookmark').prev();
	_prevEle.html(_prevEle.html() + ` <sup>「${_bmLen}」</sup> ${_st}`);
}