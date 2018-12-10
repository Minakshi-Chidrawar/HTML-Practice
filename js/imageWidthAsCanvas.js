function initiate()
{
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');

	var img = new Image();
	img.src = "images/flower.jpg";
	
	img.addEventListener('load', 
						 function() {
							canvas.drawImage(img, 0, 0, elem.width, elem.height);
							},
						 false);
}

window.addEventListener('load', initiate, false);