// 为元素绑定相关事件
import $ from '../libs/jquery.min';
import { throttle } from '../libs/lodash.min';
import fixAnchorTop from './fixAnchorTop';
import colorHeader from './colorHeader';
import colorToc from './colorToc';
import toggleToc from 'js/utils/toggleToc';
import toggleColor from "../utils/toggleColor";
import viewImage from "../utils/viewImage";


export default function initEventBinding() {
	$(window).bind('hashchange', fixAnchorTop);
	$(window).bind('scroll', throttle(colorHeader, 20));
	$(window).bind('scroll', throttle(colorToc, 500));
	$('#toc').bind('click', toggleToc);
	$('#light-dark').bind('click', toggleColor);
	if (location.href.indexOf('ovirgo') > -1) $('#s').hide();
	$('.content img').bind('click', viewImage);
}