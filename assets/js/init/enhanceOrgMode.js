import $ from 'js/libs/jquery.min'

export default function() {
	$('.html-block p').each((idx, item) => {
		item.innerHTML = `${item.innerText}`
	})
}