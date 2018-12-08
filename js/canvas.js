function initiate()
{
	var elem = document.getElementById('canvas');
	canvas = elem.getContext('2d');
}

window.addEventListener('load', initiate, false);