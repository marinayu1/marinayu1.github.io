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
      if(momentMinute % 2 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 5) {halfSecond = 'e5s';}
      else if(momentSecond <10) {halfSecond="e10s"}
      else if(momentSecond <15) {halfSecond="e15s"}
      else if(momentSecond <20) {halfSecond="e20s"}
      else if(momentSecond <25) {halfSecond="e25s"}
      else if(momentSecond <30) {halfSecond="e30s"}
      else if(momentSecond <35) {halfSecond="e35s"}
      else if(momentSecond <40) {halfSecond="e40s"}
      else if(momentSecond <45) {halfSecond="e45s"}
      else if(momentSecond <50) {halfSecond="e50s"}
      else if(momentSecond <55) {halfSecond="e55s"}
      else {halfSecond = 'fullM';}
    }



    function checkHalfMinute(momentMinute){
      if (momentMinute < 1) {halfMinute = 'e1m';}
      else if(momentMinute < 2) {halfMinute = 'e2m';}
      else if(momentMinute < 3) {halfMinute = 'e3m';}
      else if(momentMinute < 4) {halfMinute = 'e4m';}
      else if(momentMinute < 5) {halfMinute = 'e5m';}
      else if(momentMinute < 6) {halfMinute = 'e6m';}
      else if(momentMinute < 7) {halfMinute = 'e7m';}
      else if(momentMinute < 8) {halfMinute = 'e8m';}
      else if(momentMinute < 9) {halfMinute = 'e9m';}
      else if (momentMinute < 10) {halfMinute = 'e10m';}
      else if(momentMinute < 11) {halfMinute = 'e11m';}
      else if(momentMinute < 12) {halfMinute = 'e12m';}
      else if(momentMinute < 13) {halfMinute = 'e13m';}
      else if(momentMinute < 14){halfMinute = 'e14m';}
      else if(momentMinute < 15) {halfMinute = 'e15m';}
      else if(momentMinute < 16){halfMinute = 'e16m';}
      else if(momentMinute < 17){halfMinute = 'e17m';}
      else if(momentMinute < 18) {halfMinute = 'e18m';}
      else if(momentMinute < 19) {halfMinute = 'e19m';}
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
    $('.time').html(moment().format(' dddd MMMM YYYY h:mm:ss A'));
  };

  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });




});
