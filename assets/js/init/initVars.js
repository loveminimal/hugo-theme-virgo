import $ from '../libs/jquery.min';

export default function initVars() {
	let _vars = $('#vars');
	console.log(_vars.text());

	return JSON.parse(_vars.text())
}