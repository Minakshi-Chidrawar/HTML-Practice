function initiate()
{
	var images  = document.querySelectorAll('#picturebox > img');
	
	for (var i=0; i<images.length; i++)
	{
		images[i].addEventListener('dragstart', dragged, false);
		images[i].addEventListener('dragend', ending, false);
	}
	
	drop = document.getElementById('canvas');
	canvas = drop.getContext('2d');
	
	drop.addEventListener('dragenter', entering, false);
	drop.addEventListener('dragover', leaving, false);
	drop.addEventListener('drop', dropped, false);
}

function entering(e)
{
	e.preventDefault();
}

function leaving(e)
{
	e.preventDefault();
}

function ending(e)
{
	elem = e.target;
	elem.style.visibility = 'hidden';
}

function dragged(e)
{
	elem = e.target;
	e.dataTransfer.setData('Text', elem.getAttribute('id'));
	e.dataTransfer.setDragImage(e.target, 0, 0);
}

function dropped(e)
{
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
	var elem = document.getElementById(id);
	
	var posX = e.pageX - drop.offsetLeft;
	var posY  = e.pageY - drop.offsetTop;

	canvas.drawImage(elem, posX, posY);
}

window.addEventListener('load', initiate, false);