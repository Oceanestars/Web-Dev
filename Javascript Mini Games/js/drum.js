//https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
//https://stackoverflow.com/questions/846585/can-someone-explain-the-dollar-sign-in-javascript

$(document).ready(function() {

  var pad1 = new Audio('../assets/bass.wav');
  $('.padfirst').mousedown(function() {
    pad1.load()
    pad1.play();
  });

  var pad2 = new Audio('../assets/string.wav');
  $('.padsecond').mousedown(function() {
    pad2.load();
    pad2.play();
  });

  var pad3 = new Audio('../assets/choir.wav');
  $('.padthird').mousedown(function() {
    pad3.load();
    pad3.play();
  });

  var pad4 = new Audio('../assets/uke.wav');
  $('.padfourth').mousedown(function() {
    pad4.load();
    pad4.play();
  });

  var pad5 = new Audio('../assets/beatbox.wav');
  $('.padfifth').mousedown(function() {
    pad5.load();
    pad5.play();
  });

  var pad6 = new Audio('../assets/beatbox2.wav');
  $('.padsixth').mousedown(function() {
    pad6.load();
    pad6.play();
  });

  var pad7 = new Audio('../assets/didgeridoo.wav');
  $('.padseventh').mousedown(function() {
    pad7.load();
    pad7.play();
  });

  var pad8 = new Audio('../assets/pianosong.wav');
  $('.padeigth').mousedown(function() {
    pad8.load();
    pad8.play();
  });


  $(window).keydown(function(music) {

    switch(sound) {
      case "Low Tom":
        pad1.load();
        pad1.play();
        break;
      case "Beat":
        pad2.load();
        pad2.play();
        break;
      case "Snare Hit":
        pad3.load();
        pad3.play();
        break;
      case "Cowbell":
        pad4.load();
        pad4.play();
        break;
      case "Open High Hat":
        pad5.load();
        pad5.play();
        break;
      case "Open Close High Hat":
        pad6.load();
        pad6.play();
        break;
      case "Crash":
        pad7.load();
        pad7.play();
        break;

      case "High Tom":
        pad8.load();
        pad8.play();
        break;

      default:
    }
  });



});
