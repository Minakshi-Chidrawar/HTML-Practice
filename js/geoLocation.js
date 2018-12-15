function initiate()
{
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation, false);
}

function getLocation()
{
	var geoconfig = {
		enableHighAccuracy: true,
		//timeout: 10000,
		maximumAge: 60000
	};
	navigator.geolocation.watchPosition(showinfo, showerror, geoconfig);
}

function showinfo(position)
{
	var location = document.getElementById('location');
	var data = '';
	data += 'Latitude: ' + position.coords.latitude + '<br>';
	data += 'Longitude: ' + position.coords.longitude + '<br>';
	data += 'Accuracy: ' + position.coords.accuracy + 'mts.<br>';
	location.innerHTML = data;
}

function showerror(error)
{
	alert('Error: ' + error.code + ' ' + error.message);
}

window.addEventListener('load', initiate, false);