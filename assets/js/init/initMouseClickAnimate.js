// 鼠标点击波纹效果
import $ from '../libs/jquery.min';

export default function initMouseClickAnimate() {
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