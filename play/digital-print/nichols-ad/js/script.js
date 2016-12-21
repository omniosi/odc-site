// console.log("script attached");

var width = document.body.clientWidth;
// console.log(width);

if(width > 500){
	document.getElementById("reveal").style.opacity = 0;
}

function hideshow(which){
	if (!document.getElementById)
		return

	if (which.style.opacity == 100) 
		which.style.opacity=0
	else
		which.style.opacity=100	
}
