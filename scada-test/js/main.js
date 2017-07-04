const businessItem = document.querySelector('.business__items');
const businessCards = document.querySelector('.business__cards');
const businessItems = document.querySelectorAll('.business__item');
const burgerMenu = document.querySelector('.page-header__menu--burger');
const burgerClose = document.querySelector('.page-header__menu--close');
const headerMobile = document.querySelector('.page-header--mobile');
const pageHeader = document.querySelector('.page-header');


businessItem.addEventListener('mouseover', function(e) {
	if(e.target.matches('.business__item')) {
		let target = e.target.getAttribute("data-target");
		let targetId = e.target.getAttribute("id");
		businessCards.setAttribute("data-card", target);

		businessItems.forEach((item) => {
			console.log(item.id);
			if(item.id !== targetId) {
				item.classList.add('disabled');
			}
		})
	}

	
});

businessItem.addEventListener('mouseout', function(e) {	
	if(e.target.matches('.business__item')) {
		let target = e.target.getAttribute("data-target");
		businessCards.removeAttribute("data-card", target);
		let targetId = e.target.getAttribute("id");

		businessItems.forEach((item) => {
			if(item.id !== targetId) {
				item.classList.remove('disabled');
			}
		})
	}
	
});

var prevyofsset =0;

var pageTe = function(yofsset) {

    if( yofsset > prevyofsset) {
        prevyofsset = yofsset;
        return true;
    } else if ( yofsset <= prevyofsset){
        prevyofsset = yofsset;
        return false;
    }
}    


burgerMenu.addEventListener('click', function(e) {
	
	headerMobile.classList.add('active');
});

burgerClose.addEventListener('click', function(e) {
	headerMobile.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function() {
	document.body.classList.remove('preload');
	
	if (window.innerWidth > '1024'){

		window.onscroll = function(e) {
			// console.log(window.pageYOffset);
			if( pageTe(window.pageYOffset) === true ) {
			    pageHeader.classList.remove('is-maximized');
				pageHeader.classList.add('is-minimized');
			}
			else if ( pageTe(window.pageYOffset) === false ) {
				// console.log(window.pageYOffset);
			    pageHeader.classList.remove('is-minimized');
		       pageHeader.classList.add('is-maximized');

			}
		};

		document.body.addEventListener('mousewheel', function(e) {
			
			if( e.wheelDelta < 0 ) {
				console.log(e.wheelDelta);
				 pageHeader.classList.remove('is-maximized');
				pageHeader.classList.add('is-minimized');
		        
		    }
		    else if(e.wheelDelta > 0){
		    	console.log(e.wheelDelta);
				pageHeader.classList.remove('is-minimized');
		       pageHeader.classList.add('is-maximized');
		    }
		});

		
		pageHeader.classList.remove('is-maximized');
		pageHeader.classList.remove('is-minimized');
	}
	else {
		pageHeader.classList.add('mobile');
	}

});
