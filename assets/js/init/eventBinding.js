// 为元素绑定相关事件
import $ from '../libs/jquery.min';
import { throttle } from '../libs/lodash.min';
import colorToc from './colorToc';
import toggleToc from 'js/utils/toggleToc';
import toggleColor from "../utils/toggleColor";
import viewImage from "../utils/viewImage";


export default function initEventBinding() {
	$(window).bind('scroll', throttle(colorToc, 500));
	$('#toc').bind('click', toggleToc);
	$('#light-dark').bind('click', toggleColor);
	if (location.href.indexOf('walkssi') > -1) $('#s').hide();
	$('.content img').bind('click', viewImage);
}