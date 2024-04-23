const config = {
	// Set default engine, includes
	// - by: bing
	// - go: google - a piece of 404 cloud
	// - bd: baidu
	engine: 'by'
}

let scClear = document.querySelector('#sc-clear');
let scInput = document.querySelector('#sc-input');
let scVal = '';

let eby = document.querySelector('#by');
let ebd = document.querySelector('#bd');
let ego = document.querySelector('#go');
let cur;
let defaultId = '#' + config.engine;

let urlRegexp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;

function init() {
	scInput.focus();
	scClear.style = 'opacity: 0;'

	let curId = localStorage.getItem('curId')
	cur = curId ? document.querySelector(curId) : document.querySelector(defaultId);

	cur.className = 'activated';
}

function search(e) {
	if (e && e.keyCode !== 13) return;

	if (urlRegexp.test(scVal)) {
		scVal = (scVal.indexOf('http') === 0) ? scVal : ('https://' + scVal)

		window.open(scVal);
		clearVal();
		return;
	}

	let _eg;

	if (cur.id === 'by') {
		_eg = 'https://cn.bing.com/search?q='
	} else if (cur.id === 'bd') {
		_eg = 'https://baidu.com/s?wd='
	} else if (cur.id === 'go') {
		_eg = 'https://google.com/search?q='
	}

	window.open(_eg + scVal)
	// clearVal();	// 事实证明，需要重新选择引擎的频率挺高的
}

function select(e) {
	let _id = '#' + e.target.id;
	if (_id === '#engine') return;

	cur = document.querySelector(_id);
	localStorage.setItem('curId', _id)

	eby.className = '';
	ebd.className = '';
	ego.className = '';


	cur.className = 'activated';
	if (scVal) search();
}

function clearVal() {
	if (!scInput.value) return;
	scInput.value = '';
	reactive();
}

function reactive() {
	scVal = scInput.value.trim();
	scClear.style = scVal ? 'opacity: 1' : 'opacity: 0';
	scInput.focus();
}

export default  {
	init,
	select,
	search,
	clearVal,
	reactive
}