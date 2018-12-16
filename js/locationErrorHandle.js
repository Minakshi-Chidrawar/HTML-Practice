function initiate() 
{
	var get = document.getElementById('getLocation');
	get.addEventListener('click', getLocation, false);
	var location = document.getElementById('location');
}

function getLocation() {
	
  if (navigator.geolocation) {
	  console.log('in getLocation');
    navigator.geolocation.getCurrentPosition(showinfo, showError);
  } else { 
    location.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showinfo(position)
{
console.log('in getLocation');	
	var location = document.getElementById('location');
	var data = '';
	data += 'Latitude: ' + position.coords.latitude + '<br>';
	data += 'Longitude: ' + position.coords.longitude + '<br>';
	location.innerHTML = data;
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      location.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      location.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      location.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      location.innerHTML = "An unknown error occurred."
      break;
  }
}

window.addEventListener('load', initiate, false);
 