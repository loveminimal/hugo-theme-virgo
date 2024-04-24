// 为元素绑定相关事件
import $ from '../libs/jquery.min';
import { throttle } from '../libs/lodash.min';
import colorToc from './colorToc';
import toggleToc from 'js/utils/toggleToc';
import toggleColor from "../utils/toggleColor";
import viewImage from "../utils/viewImage";
import ship from "../utils/ship";



export default function initEventBinding() {
	$(window).bind('scroll', throttle(colorToc, 500));
	$('#toc').bind('click', toggleToc);
	$('#light-dark').bind('click', toggleColor);
	$('.content img').bind('click', viewImage);

	// 快捷 ship 事件绑定
	$('#engine').bind('click', ship.select);
	$('#sc-clear').bind('click', ship.clearVal);
	$('#sc-input').bind('input', ship.reactive).bind('keypress', ship.search);
}