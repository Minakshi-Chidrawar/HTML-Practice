function initiate()
{
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');
	
	/* 
	canvas.fillStyle = '#000099';
	canvas.strokeStyle = '#990000';
	
	canvas.strokeRect(100, 100, 120, 120);
	canvas.fillRect(110, 110, 100, 100);
	canvas.clearRect(120, 120, 80, 80);
	
	var grad = canvas.createLinearGradient(0, 0, 10, 100);
	grad.addColorStop(0.5, '#0000FF');
	grad.addColorStop(1, '#000000');
	canvas.fillStyle = grad;
	
	canvas.fillRect(10, 10, 100, 100);
	canvas.fillRect(150, 10, 200, 100);
	*/
	
	canvas.beginPath();
	canvas.moveTo(100, 100);
	canvas.lineTo(200, 200);
	canvas.lineTo(100, 200);
	/*
	canvas.closePath();
	canvas.stroke();
	*/
	canvas.fill();
}

window.addEventListener('load', initiate, false);