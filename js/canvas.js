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

	canvas.beginPath();
	canvas.moveTo(100, 100);
	canvas.lineTo(200, 200);
	canvas.lineTo(100, 200);
	
	canvas.closePath();
	canvas.stroke();
	canvas.fill();
	
	canvas.clip();
	canvas.beginPath();
	for(f = 0; f < 300; f++)
	{
		canvas.moveTo(0, f);
		canvas.lineTo(500, f);
	}
	canvas.stroke();

	canvas.beginPath();
	canvas.arc(100, 100, 50, 0, Math.PI*2, false);
	canvas.stroke();

	canvas.beginPath();
	var radians = Math.PI/180*180;
	canvas.arc(100, 100, 50, 0, radians, false);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(50, 50);
	canvas.quadraticCurveTo(100, 125, 50, 200);
	canvas.moveTo(250, 50);
	canvas.bezierCurveTo(200, 125, 300, 125, 250, 200);
	canvas.stroke();
	
	canvas.beginPath();
	canvas.arc(200, 150, 50, 0, Math.PI*2, false);
	canvas.stroke();	
	
	canvas.lineWidth = 10;
	canvas.lineCap = 'round';
	canvas.beginPath();
	canvas.moveTo(230, 150);
	canvas.arc(200, 150, 30, 0, Math.PI*2, false);
	canvas.stroke();	
	
	canvas.lineWidth = 5;
	canvas.lineJoin = 'miter';
	canvas.beginPath();
	canvas.moveTo(195, 135);
	canvas.lineTo(215, 155);
	canvas.lineTo(195, 155);
	canvas.stroke();
	
	// use of measureText
	canvas.font = 'bold 24px verdana, sans-serif';
	canvas.textAlign = 'start';
	canvas.textBaseline = 'bottom';
	canvas.fillText('My message', 100, 124);
	var size = canvas.measureText('My message');
	canvas.strokeRect(100, 100, size.width+50, 24);
	
	//Shadow text
	canvas.shadowColor = 'rgba(0, 0, 0, 0.5)';
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 5;
	
	canvas.font = 'bold 50px verdana, sans-serif';
	canvas.fillText('My message', 100, 100);
	
	//translate, rotate and scale
	canvas.font = 'bold 20px verdana, sans-serif';
	canvas.fillText('TEST', 50, 20);
	
	canvas.translate(50, 70);
	canvas.rotate(Math.PI/180*45);
	
	canvas.fillText('TEST', 0, 0);
	canvas.rotate(Math.PI/180*45);
	canvas.translate(0, 100);
	canvas.scale(2, 2);
	canvas.fillText('TEST', 0, 0);
	
	//transform
	canvas.transform(3, 0, 0, 1, 0, 0);
	canvas.font = 'bold 20px verdana, sans-serif';
	canvas.fillText('TEST', 20, 20);
	
	canvas.transform(1, 0, 0, 10, 0, 0);
	canvas.font = 'bold 20px verdana, sans-serif';
	canvas.fillText('TEST', 100, 20);
	
	// save and restore
	canvas.save();
	canvas.translate(50, 70);
	canvas.font = 'bold 20px verdana, sans-serif';
	canvas.fillText('TEST1', 0, 30);
	canvas.restore();
	
	canvas.fillText('TEST2', 0, 30);
	*/
	
	canvas.fillStyle = '#990000';
	canvas.fillRect(100, 100, 300, 100);
	
	canvas.globalCompositeOperation = 'destination-atop';
	
	canvas.fillStyle = '#AAAAFF';
	canvas.font = 'bold 80px verdana, sans-serif';
	canvas.textAlign = 'center';
	canvas.textBaseline = 'middle';
	canvas.fillText('TEST', 250, 110);
}

window.addEventListener('load', initiate, false);