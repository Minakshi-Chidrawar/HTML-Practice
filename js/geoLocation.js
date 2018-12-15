function initiate()
{
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation, false);
}

function getLocation()
{
	navigator.geolocation.getCurrentPosition(showinfo);
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

window.addEventListener('load', initiate, false);