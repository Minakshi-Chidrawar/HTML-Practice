function initiate()
{
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');

	var img = new Image();
	img.src = "images/flower.jpg";
	
	img.addEventListener('load', 
						 function() {
							canvas.drawImage(img, 20, 20);
							},
						 false);
}

window.addEventListener('load', initiate, false);