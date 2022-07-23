// 在大纲上为当前标题块内容着色：
// 本质就是利用标题块的 id 和大纲块标题的 href 进行关联，
// 结合元素块距离页面顶部高度与 window 滚动的高度对比，
// 来获取当前元素块并进行相关操作
import $ from '../libs/jquery.min';
import initToc from './initToc';

export default function colorToc() {
	// console.log('color toc...');
	initToc();
	
	let _curScroll = $(this).scrollTop() + 48; // window 滚动高度，`48` 表示距页面顶部的高度（默认为 0）
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