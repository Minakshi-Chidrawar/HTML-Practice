function initiate()
{
	var images  = document.querySelectorAll('#picturebox > img');
	
	for (var i=0; i<images.length; i++)
	{
		images[i].addEventListener('dragstart', dragged, false);
	}
	
	drop = document.getElementById('dropBox');
	drop.addEventListener('dragenter', entering, false);
	drop.addEventListener('dragover', leaving, false);
	drop.addEventListener('drop', dropped, false);
}

function entering(e)
{
	e.preventDefault();
	//drop.style.background = 'rgba(0, 150, 0, .2)';
}

function leaving(e)
{
	e.preventDefault();
	//drop.style.background = '#FFFFFF';
}

function dragged(e)
{
	elem = e.target;
	e.dataTransfer.setData('Text', elem.getAttribute('id'));
}

function dropped(e)
{
	e.preventDefault();
	var id = e.dataTransfer.getData('Text');
	
	if (id != "image4")
	{
		var src = document.getElementById(id).src;
		drop.innerHTML = '<img src="' + src + '">';
	} else
	{
		drop.innerHTML = 'Not admitted';
	}
}

window.addEventListener('load', initiate, false);