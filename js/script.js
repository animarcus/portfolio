var playing = false;
var x = document.getElementById("myAudio");
// var button = document.getElementById("clickMe");
console.log(x);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.getElementById("butt").value = "";
  document.addEventListener('click', function(event) {
    let buttonClicked = event.target;
    if (buttonClicked.className === 'button') {
      if (playing === false) {
        playing = true;
        playAudio();
      } else {
        playing = false;
        pauseAudio();
      }
    }
  });
}
document.addEventListener('mousedown', function(event) {
  let buttonClicked = event.target;
  if (buttonClicked.className === 'button') {
    playAudio();
  }
});

document.addEventListener('mouseup', function(event) {
  let buttonClicked = event.target;
  if (buttonClicked.className === 'button') {
    pauseAudio();
  }
});


function playAudio() {
  x.currentTime = 0;
  x.play();
}

function pauseAudio() {
  x.pause();
}

