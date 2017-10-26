$(document).ready(function() {


// Add jQuery here




function runEveryFive(){
    $(".sold").addClass("show");

      setTimeout(function() {
        $(".sold").removeClass("show");
      }, 500);
}
setInterval(runEveryFive,10000);

















  });
