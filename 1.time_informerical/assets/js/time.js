$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';

// Update time
  function update() {
    var quarter = moment().quarter();
    var momentSecond = moment().second();
    var momentMinute = moment().minute();
    var momentHour= moment().format('h').toLowerCase();
    var momentDay = moment().format('dddd').toLowerCase();
    var momentMonth = moment().format('MMMM').toLowerCase();
    var momentYear = moment().format('YYYY').toLowerCase();
    var momentAMPM = moment().format('A').toLowerCase();

    function oddOrEvenS(momentSecond){
      if(momentSecond % 2 === 0) {oddSecond = 'oddS';}
      else {oddSecond = 'evenS';}
    }

    function oddOrEvenM(momentMinute){
      if(momentMinute % 5 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 30) {halfSecond = 'halfM';}
      else {halfSecond = 'fullM';}
    }



    function checkHalfMinute(momentMinute){
      if (momentMinute < 5) {halfMinute = 'everyfive';}
      else if (momentMinute === 5) {halfMinute = 'onfive';}
      else if (momentMinute < 10) {halfMinute = 'everyten';}
      else if(momentMinute < 15) {halfMinute = 'everyfifteen';}
      else if(momentMinute < 20) {halfMinute = 'everytwenty';}
      else if(momentMinute < 25) {halfMinute = 'everytwentyfive';}
      else if(momentMinute < 30){halfMinute = 'everythirty';}
      else if(momentMinute < 35) {halfMinute = 'everythirtyfive';}
      else if(momentMinute < 45){halfMinute = 'everyfortyfive';}
      else if(momentMinute < 50) {halfMinute = 'everyfifty';}
      else if(momentMinute < 55) {halfMinute = 'everyfiftyfive';}
      else {halfMinute = 'fullH';}
    }

    // Check if odd, even, quaterpast
    oddOrEvenS(momentSecond);
    checkHalfSecond(momentSecond);
    oddOrEvenM(momentMinute);
    checkHalfMinute(momentMinute);

    var timeAll = ['s' + momentSecond, 'm' + momentMinute, 'h' + momentHour, momentAMPM, momentDay, momentMonth, 'y' + momentYear, oddSecond, oddMinute, halfSecond, halfMinute];
    var timeClass = timeAll.join(' ');

    // Add classes
    $('body').attr('class', timeClass);

    // Add format
    $('.time').html(moment().format(' h:mm:ss A'));
  };

  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });

});
