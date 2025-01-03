// 为元素绑定相关事件
import $ from '../libs/jquery.min';
import { throttle } from '../libs/lodash.min';
import colorToc from './colorToc';
import toggleToc from 'js/utils/toggleToc';
import toggleColor from "../utils/toggleColor";
import viewImage from "../utils/viewImage";
import ship from "../utils/ship";
import localsearch from "../utils/localsearch";



export default function initEventBinding() {
	$(window).bind('scroll', throttle(colorToc, 500));
	$('#toc').bind('click', toggleToc);
	$('#light-dark').bind('click', toggleColor);
	$('.content img').bind('click', viewImage);

	// 快捷 ship 事件绑定
	$('#engine').bind('click', ship.select);
	$('#ship-clear').bind('click', ship.clearVal);
	$('#ship-input').bind('input', ship.reactive).bind('keypress', ship.search);

	$('#sc-clear').bind('click', localsearch.clearInputVal);
	// $('#sc-input').bind('input', search.search).bind('keypress', search.search);
	// $('#sc-input').bind('input', search.search);
	$('#sc-input').bind('keypress blur', localsearch.search);
	$('#sc-icon').bind('click', localsearch.forceSearch);
}