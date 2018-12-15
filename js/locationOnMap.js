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
	var mapurl = 'https://maps.google.com/maps/api/staticmap?center='+position.coords.latitude+','+position.coords.longitude+
				 '&zoom=12&size=400x400&sensor=false&markers='+
				 position.coords.latitude+','+position.coords.longitude;
	location.innerHTML = '<img src="' + mapurl + '">';
}

function showerror(error)
{
	alert('Error: ' + error.code + ' ' + error.message);
}

window.addEventListener('load', initiate, false);