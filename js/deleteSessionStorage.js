function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem, false);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('text').value;
	sessionStorage[keyword]  = value;
	
	show();
	document.getElementById('keyword').value = '';
	document.getElementById('text').value = '';
}

function show(keyword){
	var databox = document.getElementById('databox');
	
	databox.innerHTML = '<div><button onclick="removeAll()">Erase everything</button></div>';
	
	for(var f=0; f<sessionStorage.length; f++)
	{
		var keyword = sessionStorage.key(f);
		var value = sessionStorage.getItem(keyword);
		
		databox.innerHTML += '<div>' + keyword + ' - ' + value + '<button onclick="remove(\''+ keyword + '\')">remove</button></div>';
		
	}
}

function remove(keyword)
{
	if(confirm('Are you sure?'))
	{
		sessionStorage.removeItem(keyword);
		show();
	}
}

function removeAll()
{
	if(confirm('Are you sure?'))
	{
		sessionStorage.clear();
		show();
	}
}
window.addEventListener('load', initiate, false);