function RunTime() {
	setInterval(RunTime , 1000);
	let date = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
	document.getElementById('text').innerText = date ;
}
RunTime();