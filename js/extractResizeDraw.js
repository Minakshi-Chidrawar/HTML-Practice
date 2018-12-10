function initiate()
{
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');

	var img = new Image();
	img.src = "images/flower.jpg";
	
	img.addEventListener('load', 
						 function() {
							canvas.drawImage(img, 0, 30, 50, 70, 100, 100, 200, 200);
							},
						 false);
}

window.addEventListener('load', initiate, false);