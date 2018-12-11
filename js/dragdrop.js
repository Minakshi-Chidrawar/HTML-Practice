function initiate()
{
	source1 = document.getElementById('image');
	source1.addEventListener('dragstart', dragged, false);
	
	drop = document.getElementById('dropBox');
	drop.addEventListener('dragenter', function(e){ e.preventDefault(); }, false);
	drop.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
	drop.addEventListener('drop', dropped, false);
}

function dragged(e)
{
	var code = '<img src="' + source1.getAttribute('src') + '">';
	e.dataTransfer.setData('Text', code);
}

function dropped(e)
{
	e.preventDefault();
	drop.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener('load', initiate, false);