$(document).ready(function() {
      var beep = $("#beep")[0];
      $(".btn-11").mouseenter(function() {
        beep.play();
        beep.stop();
      });
    });
