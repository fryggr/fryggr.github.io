$(function(){
 $("#slides").slides({
   width: 333,
   height: 709,
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
  $(".burger-nav a").click(function() {
    $('.burger-nav').slideToggle("slow");
  })
/*$(".number-rooms__item").click(function() {
  var elem = $(event.target);
  //$('.rooms-choice').addClass('clicked');
  $('> label > .rooms-choice', elem).css("display", "block");
});*/
});
$(document).ready(function(){

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
var feedbackCaptcha;
var authCaptcha;

function recaptchaCallback() {
  feedbackCaptcha = grecaptcha.render('feedback_captcha', {
    'sitekey' : '6LccBAkUAAAAAIWOWdJKxDiG3Ci5_y0bmCIjVJic'
  });

  authCaptcha = grecaptcha.render('auth_captcha', {
    'sitekey' : '6LccBAkUAAAAAIWOWdJKxDiG3Ci5_y0bmCIjVJic'
  });
  authCaptcha2 = grecaptcha.render('auth_captcha', {
    'sitekey' : '6LccBAkUAAAAAIWOWdJKxDiG3Ci5_y0bmCIjVJic'
  });
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn_m = document.getElementById("myBtn-m");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var captcha = document.getElementsByClassName('captcha-text')[0];
// Get the modal
var modal2 = document.getElementById('myModal2');
modal2.onsubmit = function() {
  event.preventDefault();
  if (grecaptcha.getResponse()!='') {
    modal3.style.display = "block";
    modal.style.display = "none";
    captcha.innerHTML='';
  }
  else {
    captcha.innerHTML='Для регистрации необходимо пройти проверку на робота. Для этого подтвердите capthca.';
  }
}
var form3 = document.getElementById('consult');
form3.onsubmit = function() {
  event.preventDefault();
  if (grecaptcha.getResponse()!='') {
    modal3.style.display = "block";
    //modal.style.display = "none";
    captcha.innerHTML='';
  }
  else {
    captcha.innerHTML='Для регистрации необходимо пройти проверку на робота. Для этого подтвердите capthca.';
  }
}
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn5.onclick = function() {
    modal.style.display = "block";
}

btn_m.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// btn2.onclick = function() {
//     modal.style.display = "none";
//     modal2.style.display = "block";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// When the user clicks on the button, open the modal
/*btn2.onclick = function() {
    modal2.style.display = "block";
}*/

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// Get the modal
var modal3 = document.getElementById('myModal3');


// Get the button that opens the modal
var form1 = document.getElementById("myForm1");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];
// When the user clicks on the button, open the modal
form1.onsubmit = function() {
  event.preventDefault();
  if (grecaptcha.getResponse()!='') {
    modal3.style.display = "block";
    captcha.innerHTML='';
  }
  else {
    captcha.innerHTML='Для регистрации необходимо пройти проверку на робота. Для этого подтвердите capthca.';
  }
}
// btn4.onclick = function() {
//     modal3.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {

    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
