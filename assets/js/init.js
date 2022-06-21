import $ from 'jquery';
import toggleToc from './utils/toggleToc';

export {
	greet,
	initEventBinding,
	initToc,
	initMouseClickAnimate,
}

function greet() {
	console.log(
		`---------------------
		\n\tHello Jack 😎\n
		---------------------`
	);
}

// 鼠标点击波纹效果
function initMouseClickAnimate() {
	$(document).click((e) => {
		let size = 120; // size of water block
		$('body').append(`<div class='water-animate'></div>`); // create a water block

		$('.water-animate')
			.css({
				// init style
				position: 'fixed',
				left: e.clientX,
				top: e.clientY,
				borderRadius: size + 'px',
				border: '2px solid #19f',
				'z-index': -1,
			})
			.stop() // to stop non-end previous animate
			.animate(
				{
					width: size,
					height: size,
					left: e.clientX - size / 2,
					top: e.clientY - size / 2,
					opacity: '0',
				},
				'slow',
				() => $('body .water-animate').remove()
			);
	});
}


// 为元素绑定相关事件
function initEventBinding() {
	$(window).bind('hashchange', fixAnchorTop);
	$(window).bind('scroll', colorToc);
	$('#toc').bind('click', toggleToc);
}

// 修复点击大纲时对应元素距窗口顶部的高度
function fixAnchorTop() {
	let _hash = decodeURIComponent(location.hash)
	if (_hash) $('html').scrollTop($(_hash).offset().top - 72);
}


// 在大纲上为当前标题块内容着色：
// 本质就是利用标题块的 id 和大纲块标题的 href 进行关联，
// 结合元素块距离页面顶部高度与 window 滚动的高度对比，
// 来获取当前元素块并进行相关操作
function colorToc() {
	let _curScroll = $(this).scrollTop() + 72; // window 滚动高度，`72` 表示距页面顶部的高度（默认为 0）
	let _curHeadline; // 当前标题块
	let _arrTop = []; // 所有标题块距页面顶部高度的集合

	$('.headline').each(function () {
		let _curHeadlineTop = $(this).offset().top; // 当前标题块距页面顶部的高度
		_arrTop.push(_curHeadlineTop);

		// 当前标题块距页面顶部高度小于页面滚动高度时，即视为当前标题块区域（1 为自定义的高度容差）
		if (_curHeadlineTop - 1 < _curScroll) _curHeadline = $(this);

		// Avoid there no block at current height
		if (_curScroll >= _arrTop[0]) {
			let _id = 'id-' + _curHeadline.attr('id')

			$('.toc-link').removeClass('toc-link--active');
			$('#' + _id).addClass('toc-link--active'); // 高亮对应大纲标题
		}
	})
}


// 为所有的 `h2、h3` 标题添加统一的类名
function _initAllHeadlines() {
	$('h2, h3').addClass('headline');
}

// 为大纲中的 `<a>` 设置一个 `id`
function initToc() {
	_initAllHeadlines();

	$('#TableOfContents a').each(function () {
		let _id = 'id-' + $(this).attr('href').split('#')[1];
		$(this).attr('id', _id);
		$(this).addClass('toc-link');
	})
}
