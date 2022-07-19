import $ from '../libs/jquery.min';

export default function viewImage(e) {
	// console.log(e)
	let curImgSrc = e.target.attributes.src.value;
	console.log(curImgSrc)

	// backdrop-filter: blur(5px);
	document.body.style="overflow: hidden;"
	$('body').prepend(
		`<div 
			id="mask" 
			onclick="document.body.removeChild(document.getElementById('mask')); document.body.style=''"
			style="
				position: fixed; 
				background: rgba(255, 255, 255, .96); 
				backdrop-filter: blur(5px);
				left: 0; top: 0; 
				width: 100%; height: 100%; 
				overflow-y:auto; 
				overflow-x: hidden; 
				z-index: 2000; ">
			<img src=${curImgSrc} style="display: block; margin: 0 auto; padding: 24px; max-width: 100%;" />
		</div>`
	)
}