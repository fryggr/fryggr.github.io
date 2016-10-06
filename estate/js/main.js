$(function(){
  $("#slides").slides({
    //width: 100%,
    height: 690,
    responsive: true
  });
});
$( document ).on( "ready", function() {
  $('ul.thumbs a').removeAttr('data-lightbox');
  $('.content a').removeAttr('href');
  console.log('111')
  //$('div.slideshow a').attr('href', 'img/2-1.jpg');

});
$(document).ready(function () {
$("div.tab_content").hide();
$("div.tab_container div.tab_content:first-child").show().addClass("active");
$(".owl-stage .owl-item:first").addClass("active2");

    $('.owl-carousel3-m .item').click(function () {
        //console.log($(this).attr("tabindex"));
        if (!$(this).hasClass('active2')){
          $('.active2').removeClass('active2');
          $(this).addClass('active2');
        }


        if ($(this).attr("tabindex")) {
          var atribute = '[index ='+$(this).attr("tabindex")+']';
          var tab = $(atribute);
          if (!tab.addClass('').hasClass('active')) {
            $(".tabsplan .active").removeClass('active').hide();
              tab.addClass('active').show();

          }
        else console.log('Данная категория уже выбрана');

      }

      else console.log(" Не обнаруженно индетификатора элемента. Используйте атрибут tabindex")
    });
    $('.owl-carousel3 .item').click(function () {
        //console.log($(this).attr("tabindex"));
        if (!$(this).hasClass('active2')){
          $('.active2').removeClass('active2');
          $(this).addClass('active2');
        }


        if ($(this).attr("tabindex")) {
          var atribute = '[index ='+$(this).attr("tabindex")+']';
          var tab = $(atribute);
          if (!tab.addClass('').hasClass('active')) {
            $(".tabsplan .active").removeClass('active').hide();
              tab.addClass('active').show();

          }
        else console.log('Данная категория уже выбрана');

      }

      else console.log(" Не обнаруженно индетификатора элемента. Используйте атрибут tabindex")
    });
});
$(document).ready(function(){
  $(".owl-carousel1").owlCarousel({
    items:4,
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: ["", ""],
  });
  $(".owl-carousel2").owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: ["", ""],
  });
  $(".owl-carousel-m").owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: ["", ""],
  });
  $(".owl-carousel3").owlCarousel({
    items:4,
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    navText: ["", ""],
    responsive: true
  });
  $(".owl-carousel3-m").owlCarousel({
    items:1,
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    navText: ["", ""],
    responsive: true
  });

  $(".form-consult").click(function() {
    $('#consult, .form-btn').css('display', 'block')
  })
  $(".burger-icon").click(function() {
    $('.burger-nav').slideToggle("slow");
  })
/*$(".number-rooms__item").click(function() {
  var elem = $(event.target);
  //$('.rooms-choice').addClass('clicked');
  $('> label > .rooms-choice', elem).css("display", "block");
});*/
});
$(document).ready(function(){
  /*$("img.nature").panorama(
  {
    viewport_width: 100,
    speed: 30000,
    direction: "left",
    control_display: "yes",
    mode_360: false,
    auto_start: false
  });*/
  var pano = $("#myPano").pano({
        img: "img/pano.jpg",
        interval: 15000,
        speed: 100
    });

    pano.moveLeft();
    pano.stopMoving();
    pano.moveRight();
    pano.stopMoving();

});
