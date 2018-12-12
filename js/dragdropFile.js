function initiate() 
{
	drop = document.getElementById('dropBox');
	drop.addEventListener('dragenter', function(e){e.preventDefault();}, false);
	drop.addEventListener('dragover', function(e){e.preventDefault();}, false);
	drop.addEventListener('drop', dropped, false);
}

function dropped(e)
{
	e.preventDefault();
	var files = e.dataTransfer.files;
	var list = '';
	for (var f = 0; f < files.length; f++)
	{
		list += 'File: ' +files[f].name + '  | size of file: ' + files[f].size + '<br>';
	}
	
	drop.innerHTML = list;
}

window.addEventListener('load', initiate, false);