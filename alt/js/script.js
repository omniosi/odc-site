var bar = document.getElementById('bar');
var menu = document.getElementById('menu');

bar.addEventListener('mouseenter',baropen,false);
bar.addEventListener('mouseout',barclose,false);

function baropen(e){
	event.target.style.height = '60px';
	menu.style.top = '0px';
}
function barclose(e){
	event.target.style.height = '18px';
	menu.style.top = '-100px';
}