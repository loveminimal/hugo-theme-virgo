// 为元素绑定相关事件
import $ from '../libs/jquery.min';
import fixAnchorTop from './fixAnchorTop';
import colorHeader from './colorHeader';
import colorToc from './colorToc';
import toggleToc from 'js/utils/toggleToc';
import toggleColor from "../utils/toggleColor";


export default function initEventBinding() {
	$(window).bind('hashchange', fixAnchorTop);
	$(window).bind('scroll', colorHeader);
	$(window).bind('scroll', colorToc);
	$('#toc').bind('click', toggleToc);
	$('#light-dark').bind('click', toggleColor);
	if (location.href.indexOf('ovirgo') > -1) $('#s').hide();
}