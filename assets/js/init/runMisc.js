import $ from 'js/libs/jquery.min';

export default function () {

	// 渲染空链接导航选项
	$('.content-nav table td').each((idx, item) => {
		// console.log(item.innerHTML);
		if (!item.innerHTML) {
			item.innerHTML = `<a style='border: 1px dashed #3333;'><span style='opacity: 0;'>.</span></a>`;
		}
	})

	// 默认在新标签页中打开超链接 <base target="_blank">，
	// 除相关文章、目录导航两个区域
	$('.rel a, .toc a').each((idx, item) => item.target = '_self')
}