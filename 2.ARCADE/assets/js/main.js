$(document).ready(function() {





  function runEveryFive(){
      $(".sold").addClass("show");

        setTimeout(function() {
          $(".sold").removeClass("show");
        }, 500);
  }
  setInterval(runEveryFive,5000);







  });
