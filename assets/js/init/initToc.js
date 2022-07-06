// 为所有的 `h2、h3` 标题添加统一的类名
import $ from '../libs/jquery.min';


// 为大纲中的 `<a>` 设置一个 `id`
export default function initToc() {
	$('h2, h3').addClass('headline');

	$('#TableOfContents a').each(function () {
		let _id = 'id-' + $(this).attr('href').split('#')[1];
		$(this).attr('id', _id);
		$(this).addClass('toc-link');
	})
}