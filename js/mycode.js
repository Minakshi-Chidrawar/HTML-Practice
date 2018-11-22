function showalert(){
	alert('You Clicked Me');
}

function clickme() {
	document.getElementByTagName('p')[0].onclick=showalert;
}

window.onload=clickme;