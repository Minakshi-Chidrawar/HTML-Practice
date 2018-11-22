function showalert(){
	alert('You Clicked Me');
}

function clickme() {
	var list = document.querySelectorAll("#main p");
	for(var i = 0; i < list.length; i++) {
		list[i].onclick = showalert;
	}
}

window.onload = clickme;