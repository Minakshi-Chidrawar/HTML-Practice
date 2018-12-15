function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem, false);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('text').value;
	localStorage.setItem(keyword, value);
	
	show();
	document.getElementById('keyword').value = '';
	document.getElementById('text').value = '';
}

function show(){
	var databox = document.getElementById('databox');
	databox.innerHTML = '';
	
	for (var f=0; f<localStorage.length; f++)
	{
		var keyword = localStorage.key(f);
		var value = localStorage[keyword];
		
		databox.innerHTML += '<div>' + keyword + ' - ' + value + '</div>';
	}
}

window.addEventListener('load', initiate, false);