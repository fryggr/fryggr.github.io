var video =  document.getElementByTag('video');
window.onload = function(){
  video.play();
 }; 
$(function(){
  $("#slides").slides({
    //width: 100%,
    height: 690,
    responsive: true
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
