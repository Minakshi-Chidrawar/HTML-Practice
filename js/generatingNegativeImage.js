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
	canvas.drawImage(img, 0, 0);
	var info = canvas.getImageData(0, 0, 175, 262);
	
	var pos;
	for(x = 0; x <= 175; x++)
	{
		for(y = 0; y <= 262; y++)
		{
			pos = (info * 4 *y) + (x * 4);
			info.data[pos] = 255 - info.data[pos];
			info.data[pos+1] = 255 - info.data[pos+1];
			info.data[pos+2] = 255 - info.data[pos+2];
		}
	}
	
	canvas.putImageData(info, 0, 0);
}

window.addEventListener('load', initiate, false);