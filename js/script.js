
var x = document.getElementById("myAudio");
// var button = document.getElementById("clickMe");
console.log(x);
document.addEventListener('mousedown', function(event) {
  let buttonClicked = event.target;
  if (buttonClicked.className === 'button') {
    // console.log("boop");
    // document.getElementById("butt").value = "Press me";
    playAudio();
  }
});

document.addEventListener('mouseup', function(event) {
  let buttonClicked = event.target;
  if (buttonClicked.className === 'button') {
    // console.log("booper");
    // document.getElementById("butt").value = "Press Me";
    pauseAudio();
  }
});


function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
  x.currentTime = 0;
}

