function initiate() {
	maxim = 550;
	mmedia = document.getElementById('media');
	play = document.getElementById('play');
	mute = document.getElementById('mute');
	bar = document.getElementById('bar');
	progress = document.getElementById('progress');
	
	play.addEventListener('click', push, false);
	mute.addEventListener('click', muteVideo, false);
	bar.addEventListener('click', move, false);
}

function push() {
	if (!mmedia.paused && !mmedia.ended) {
		mmedia.pause();
		play.innerHTML = 'Play';
		window.clearInterval(loop);
	} else {
		mmedia.play();
		play.innerHTML = 'Pause';
		loop = setInterval(status, 1000);
	}
}

function move(e) {
	if (!mmedia.paused && !mmedia.ended) {
		var mouseX = e.pageX-bar.offsetLeft;
		var newtime = mouseX * mmedia.duration/maxim;
		mmedia.currentTime = newtime;
		progress.style.width = mouseX+'px';
	}
}

function muteVideo() {
	if (!mmedia.muted) {
		mmedia.muted = true;
		mute.innerHTML = 'UnMute';
	} else {
		mmedia.muted = false;
		mute.innerHTML = 'Mute';
	}
}
window.addEventListener('load', initiate, false);