function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem, false);
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('text').value;
	sessionStorage.setItem(keyword, value);
	
	show();
	document.getElementById('keyword').value = '';
	document.getElementById('text').value = '';
}

function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '';
	
	for (var i=0; i<sessionStorage.length; i++);
	{
		var keyword = sessionStorage.key(i);
		var value = sessionStorage.getItem(keyword);
		databox.innerHTML = '<div>' + keyword + ' - ' + value + '</div>';
	}
	
}

window.addEventListener('load', initiate, false);