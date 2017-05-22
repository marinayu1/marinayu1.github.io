$(document).ready(function() {

  $('.number').mouseenter(function() {
    $('.footnote').addClass('showme');
  });



$('.number').mouseleave(function() {
   $('.footnote').removeClass('showme');
 });

 $('.metahaven').mouseenter(function() {
   $('.cloud').addClass('enlarge');
 });

 $('.metahaven').mouseleave(function() {
    $('.cloud').removeClass('enlarge');
  });

  $('.metahaven').mouseenter(function() {
    $('.thecoming').addClass('enlarge');
  });

  $('.metahaven').mouseleave(function() {
     $('.thecoming').removeClass('enlarge');
   });

  $('.thumbnail').click(function() {
    $(this).toggleClass('enlarge');
  });

});
