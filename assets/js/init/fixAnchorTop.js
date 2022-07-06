// 修复点击大纲时对应元素距窗口顶部的高度

import $ from '../libs/jquery.min';
import isMobile from '../utils/isMobile';

export default function fixAnchorTop() {
	let _hash = decodeURIComponent(location.hash)
	// 在移动设备上使用的距顶元素竟然还不一样……
	let _ele = isMobile() ? $('body') : $('html')
	if (_hash) _ele.scrollTop($(_hash).offset().top - 48);
}