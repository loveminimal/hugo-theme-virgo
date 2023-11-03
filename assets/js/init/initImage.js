import $ from '../libs/jquery.min';
// 在使用 Obsidian 或 Typora 自动插入图片时，
// 自动插入的图片路径为 assets/xxx.jpg 等，而
// Hugo 无法正确渲染访路径，它在解析的时候，会
// 生成有类似如下路径：
// http://localhost:1313/temp-%E8%B0%83%E8%AF%95%E6%96%87%E4%BB%B6/assets/baby.png ，所以
// 我们对其遍历，为不以 / 开头的路径，添加 / 
export default function initImage() {
	$('img').each((idx, item) => {
		// console.log(item);
		// console.log($(item).attr('src'));
		// console.log(item.src);
		let src = $(item).attr('src');
		// console.log(src);

		if (!src.startsWith('http') && !src.startsWith('/')) {
			// console.log('!!!!!!!!!');
			// console.log(src);
			$(item).attr('src', '/' + src);
		}

		// 修复 ![xy|300](http://xxx.com/xx.jpg) 格式图片尺寸显示问题
		let _alt = $(item).attr('alt') || '';
		if (_alt.indexOf('|') > -1) {
			$(item).attr('width', _alt.split('|')[1])
		}

	})
}

