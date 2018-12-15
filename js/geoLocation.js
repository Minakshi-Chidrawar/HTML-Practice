function initiate()
{
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation, false);
}

function getLocation()
{
	navigator.geolocation.getCurrentPosition(showinfo, showerror);
}

function showinfo(position)
{
	var location = document.getElementById('location');
	var data = '';
	data += 'Latitude: ' + position.coords.latitude + '<br>';
	data += 'Longitude: ' + position.coords.longitude + '<br>';
	data += 'Accuracy: ' + position.coords.accuracy + '<br>';
	location.innerHTML = data;
}

function showerror(error)
{
	alert('Error: ' + error.code + ' ' + error.message);
}

window.addEventListener('load', initiate, false);