function initiate()
{
	source1 = document.getElementById('image');
	source1.addEventListener('dragstart', dragged, false);
	source1.addEventListener('dragstart', ending, false);
	
	drop = document.getElementById('dropBox');
	drop.addEventListener('dragenter', entering, false);
	drop.addEventListener('dragenter', leaving, false);
	drop.addEventListener('dragover', function(e){ e.preventDefault(); }, false);
	drop.addEventListener('drop', dropped, false);
}

function entering(e)
{
	e.preventDefault();
	drop.style.background = 'rgba(0, 150, 0, .2)';
}

function leaving(e)
{
	e.preventDefault();
	drop.style.background = '#FFFFFF';
}

function ending(e)
{
	elem = e.target;
	elem.style.visibility = 'hidden';
}

function dragged(e)
{
	var code = '<img src="' + source1.getAttribute('src') + '">';
	e.dataTransfer.setData('Text', code);
}

function dropped(e)
{
	e.preventDefault();
	drop.style.background = '#FFFFFF';
	drop.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener('load', initiate, false);