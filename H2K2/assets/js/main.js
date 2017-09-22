$(document).ready(function() {


// Add jQuery here



$('.nav_labels').click(function(event){
  $('.item').removeClass('show');
  $('.item').addClass('hide');


  $('.item.labels').removeClass('hide');
  $('.item.labels').addClass('show');

  $('.nav_clear').addClass('show');
});

$('.nav_merch').click(function(event) {
    $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.merch').removeClass('hide');
  $('.item.merch').addClass('show');

    $('.nav_clear').addClass('show');
});

$('.nav_print').click(function(event) {
    $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.print').removeClass('hide');
  $('.item.print').addClass('show');

    $('.nav_clear').addClass('show');
});

$('.nav_tools').click(function(event) {
    $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.tools').removeClass('hide');
  $('.item.tools').addClass('show');

    $('.nav_clear').addClass('show');
});


$('.nav_clear').click(function(event) {
  $('.nav_clear').addClass('hide');
  $('.nav_clear').removeClass('show');

    $('.item').removeClass('hide');
});

$('.nav_thumbnail').click(function(event) {
  $('.item').addClass('thumbnail');

});

$('.nav_large').click(function(event) {
  $('.item').removeClass('thumbnail');
});














  });
