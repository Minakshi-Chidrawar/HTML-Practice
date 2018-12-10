function initiate()
{
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');

	var img = new Image();
	img.src = "images/flower.jpg";
	
	img.addEventListener('load', modiImage, false);
}

function modiImage(e) 
{
	img = e.target;
	var pattern = canvas.createPattern(img, 'repeat');
	canvas.fillStyle = pattern;
	canvas.fillRect(0, 0, 500, 300);
}

window.addEventListener('load', initiate, false);