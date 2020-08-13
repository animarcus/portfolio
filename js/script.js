var playing = false;
var x = document.getElementById("myAudio");
x.loop = true;
// var button = document.getElementById("clickMe");
console.log(x);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.addEventListener("touchstart", function(e) {
    if (event.target.className === "pressme") {
      playAudio();
      }
    }
  );
  document.addEventListener("touchend", function(e) {
    if (event.target.className === "pressme") {
      pauseAudio();
      }
    }
  );
}

document.addEventListener('mousedown', function(event) {
  let buttonClicked = event.target;
  if (buttonClicked.className === "pressme") {
    playAudio();
  }
});

document.addEventListener('mouseup', function(event) {
  pauseAudio();
});


function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}

