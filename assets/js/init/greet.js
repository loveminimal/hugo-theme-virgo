export default function greet () {
	let year = new Date().getFullYear();
	console.log(
		`---------------------
		\n\tHello Jack 😎, ${year} !\n
		---------------------`
	);
	document.querySelector('#info-date').innerHTML = year;
}