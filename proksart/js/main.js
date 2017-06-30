$(document).ready(function() {

    $('.burger-menu').click(function () {
        $('.navbar-collapse').slideToggle("slow");
    })
    $('.close-menu').click(function() {
    	$('.navbar-collapse').slideToggle("slow");
    })

    $('.services__dev').click(function() {
        $('.services__dev-hidden').css({
                zIndex: '1'
            });
        $('.services__dev-hidden').animate({      
            left: "25%"
          }, 1000);
        $('.services__update').animate({      
            left: "75%"
          }, 1000);
        $('.services__projects').animate({      
            left: "75%"
          }, 1000);
        $('.services__support').animate({      
            left: "75%"
          }, 1000);

    })

    $('.hidden-close').click(function() {

        $('.services__dev-hidden').animate({      
            left: "-50%"
          }, 1000);
        $('.services__update').animate({      
            left: "0"
          }, 1000);
        $('.services__projects').animate({      
            left: "0"
          }, 1000);
        $('.services__support').animate({      
            left: "0"
          }, 1000, function() {
            zIndex: '0'
          });
    })

    $('.services__update').click(function() {
        $('.services__update-hidden').css({
                zIndex: '0'
            });
        $('.services__update-hidden').animate({      
            left: "25%"
          }, 1000);
        $('.services__update').animate({      
            left: "-25%"
          }, 1000);
        $('.services__projects').animate({      
            left: "50%"
          }, 1000);
        $('.services__support').animate({      
            left: "50%"
          }, 1000);

    })

    $('.hidden-close--update').click(function() {

        $('.services__update-hidden').animate({      
            left: "-25%"
          }, 1000);
        $('.services__update').animate({      
            left: "0"
          }, 1000);
        $('.services__projects').animate({      
            left: "0"
          }, 1000);
        $('.services__support').animate({      
            left: "0"
          }, 1000, function() {
            zIndex: '-2'
          });
    })

    $('.services__projects').click(function() {
        $('.services__projects-hidden').css({
                zIndex: '2'
            });
        $('.services__projects-hidden').animate({      
            left: "25%"
          }, 1000);
        $('.services__projects').animate({      
            left: "-50%"
          }, 1000);
        $('.services__support').animate({      
            left: "25%"
          }, 1000);

    })

    $('.hidden-close--projects').click(function() {
        $('.services__projects-hidden').animate({      
            left: "75%"
          }, 1000);
        $('.services__projects').animate({      
            left: "0"
          }, 1000);
        $('.services__support').animate({      
            left: "0"
          }, 1000, function() {
            $('.services__projects-hidden').css({
                zIndex: '-2'
            });
          });
    })

    $('.services__support').click(function() {
        $('.services__support-hidden').css({
                zIndex: '2'
            });
        $('.services__support-hidden').animate({      
            left: "25%"
          }, 1000);
        $('.services__support').animate({      
            left: "-75%"
          }, 1000);

    })

    $('.hidden-close--support').click(function() {
        $('.services__support-hidden').animate({      
            left: "100%"
          }, 1000);
        $('.services__support').animate({      
            left: "0"
          }, 1000, function() {
            $('.services__support-hidden').css({
                zIndex: '-2'
            });
          });
    })

    $('.main-nav__item--contacts').click(function() {
      $('.contacts-db').css({
        display: 'block'
      });
    })

    $('.item__description .button').click(function() {
      $('.contacts-db').css({
        display: 'block'
      });
    })

    $('.contacts-close').click(function() {
      $('.contacts-db').css({
        display: 'none'
      });
    })

    $('.main-nav__item--contacts-mob').click(function() {
      $('.navbar-collapse').slideToggle("slow");
      $('.contacts-db').css({
        display: 'block'
      });
    })

})