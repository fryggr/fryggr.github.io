$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
  	nav: true,
  	items: 1,
  	navText: [],
  	navContainerClass: "start-home__nav",
  	animateOut: 'fadeOut'
  });

let navNext = document.querySelector(".owl-next");
let navPrev = document.querySelector(".owl-prev");

let imgNavNext = document.createElement("img");
let imgNavPrev = document.createElement("img");
console.log(navPrev);

imgNavNext.setAttribute('src', 'img/nav-next.png');
imgNavPrev.setAttribute('src', 'img/nav-prev.png');
console.log(navPrev);

navNext.appendChild(imgNavNext);
navPrev.appendChild(imgNavPrev);


});


