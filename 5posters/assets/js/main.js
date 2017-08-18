$(document).ready(function(){

  setTimeout(function () {
    $('.description').addClass('addred');
  }, 5000);



  setTimeout(function () {
      $('.whiterectangle').addClass('moveleft');
    }, 1000);

    setTimeout(function () {
        $('.whiterectangle').addClass('movedown');
      }, 3000);

      setTimeout(function () {
          $('.whiterectangle').addClass('moveright');
        }, 5000);

        setTimeout(function () {
            $('.whiterectangle').addClass('movedown2');
          }, 7000);

          setTimeout(function () {
              $('.whiterectangle').addClass('moveleft');
            }, 9000);


  setTimeout(function () {
            $('.numbers').addClass('enlarge');
          }, 2000);

          setTimeout(function () {
                    $('.numbers').addClass('smaller');
                  }, 4000);




  $('.felix').mouseenter(function() {
       $('.felixdates').addClass('showme');
     });

     $('.felix').mouseleave(function() {
          $('.felixdates').removeClass('showme');
        });


        $('.pierre').mouseenter(function() {
             $('.pierredates').addClass('showme');
           });

           $('.pierre').mouseleave(function() {
                $('.pierredates').removeClass('showme');
              });

              $('.don').mouseenter(function() {
                   $('.dondates').addClass('showme');
                 });

                 $('.don').mouseleave(function() {
                      $('.dondates').removeClass('showme');
                    });

                    $('.her').mouseenter(function() {
                         $('.herdates').addClass('showme');
                       });

                       $('.her').mouseleave(function() {
                            $('.herdates').removeClass('showme');
                          });

                          $('.piet').mouseenter(function() {
                               $('.pietdates').addClass('showme');
                             });

                             $('.piet').mouseleave(function() {
                                  $('.pietdates').removeClass('showme');
                                });
        $('.posterone').mouseenter(function() {
        $('.posterone__image').addClass('showme');
        });

        $('.posterone').mouseleave(function() {
        $('.posterone__image').removeClass('showme');
        });

        $('.postertwo').mouseenter(function() {
        $('.postertwo__image').addClass('showme');
        });

        $('.postertwo').mouseleave(function() {
        $('.postertwo__image').removeClass('showme');
        });

        $('.posterthree').mouseenter(function() {
        $('.posterthree__image').addClass('showme');
        });

        $('.posterthree').mouseleave(function() {
        $('.posterthree__image').removeClass('showme');
        });

        $('.posterfour').mouseenter(function() {
        $('.posterfour__image').addClass('showme');
        });

        $('.posterfour').mouseleave(function() {
        $('.posterfour__image').removeClass('showme');
        });

        $('.posterfive').mouseenter(function() {
        $('.posterfive__image').addClass('showme');
        });

        $('.posterfive').mouseleave(function() {
        $('.posterfive__image').removeClass('showme');
        });



        var audioBell = document.createElement('audio');
             audioBell.setAttribute('src', 'file:///Users/marinayu/Downloads/French%20Telephone%20Numbers%20Part%201.mp3');
             $.get();
             audioBell.addEventListener("load", function() {
               audioBell.play();
             }, true);

             $('.number').mouseenter(
                  function() {
                    audioBell.play();
                },
              );


              $('.number').mouseenter(function() {
                   $('.backgroundnumbers').addClass('showme');
                 });

                 $('.number').mouseleave(function() {
                      $('.backgroundnumbers').removeClass('showme');
                    });




});
