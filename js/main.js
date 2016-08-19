function initMap() {
  var myLatLng = {lat: 55.741329, lng: 37.707073};
  var styleArray =
  [
      {
          "stylers": [
              {
                  "hue": "#ff1a00"
              },
              {
                  "invert_lightness": true
              },
              {
                  "saturation": -100
              },
              {
                  "lightness": 33
              },
              {
                  "gamma": 0.5
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#2D333C"
              }
          ]
      }
  ];

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.741286, lng: 37.706335},
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 18
  });
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng
  });
}
$(function(){
     $('#liquid-slider').liquidSlider({
			 dynamicArrowsGraphical: true,
			 autoHeight:false,
		  slideEaseFunction:'animate.css',
		  slideEaseDuration:800,
		  heightEaseDuration:500,
		  animateIn:"fadeIn",
		  animateOut:"fadeOut",
      responsive: true,
		  callback: function() {
		    var self = this;
		    $('.liquid-slider-panel').each(function() {
		      $(this).removeClass('animated ' + self.options.animateIn);
		    });
		  }
		 });
});

(function(){

	$(document).ready(function() {

    //Preloader
    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('span');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });


    //modals
    var $modals = $('.modal');
    var $body = $('body');
    var api = false;
    $('.modal-opener').on('click', function(){
    	var targetId = $(this).attr('href');
    	var $currentModal = $( targetId );
    	$currentModal.fadeIn('fast', function(){
    		var $scrollText = $currentModal.find('.modal__text');
    		$scrollText.jScrollPane();
    		api = $scrollText.data('jsp');
    		$body.addClass('modal-lock');
    	});
    	return false;
    });

    $('.modal__close, .modal__bg').on('click', function(){
    	$modals.hide();
  		$body.removeClass('modal-lock');
  		api = false;
    	return false;
    });

		$('.modal__use').on('click', function(){
			$('#modal-articles').hide();
			$body.removeClass('modal-lock');
			api = false;
			return false;
		});


    $(window).on('resize', function(){
    	if (api) api.reinitialise();
    });


		//РС‰РµРј РІСЃРµ РЅРµРѕР±С…РѕРґРёРјС‹Рµ РґРѕРј-СЌР»РµРјРµРЅС‚С‹
		var paralax = $('[data-paralax="true"]'),
				paralaxShow = $('[data-paralax-show]'),
				paralaxShowTrue = $('[data-paralax-show="true"]'),
				paralaxShowRoll = $('[data-paralax-show="roll"]'),
				paralaxBackground = $('[data-paralax-background]'),
				navLinks = $('[data-nav]'),
				paralaxScroll = 0,
				scrollPos = 0,
				sections = $('section'),
				videos = $('video'),
				videoSections =  $('section.video'),
				playButtons = videoSections.find('.i-play-button');

		var emValue = 1;
		//РџРµСЂРµСЃС‡РµС‚ РїРёРєСЃРµР»РµР№ РІ em (1em = 10px)
		var toEm = function(px){
			return px / (emValue * 10);
		}

		//Р—Р°РґР°РёРј РјРёРЅРёРјР°Р»СЊРЅСѓСЋ РІС‹СЃРѕС‚Сѓ РІРѕ РІРµСЃСЊ СЌРєСЂР°РЅ РґР»СЏ РєР°Р¶РґРѕР№ СЃРµРєС†РёРё
		var setSectionHeight = function(){

			//РњРµРЅСЏРµРј СЂР°Р·РјРµСЂ С€СЂРёС„С‚Р° РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РІС‹СЃРѕС‚С‹ СЌРєСЂР°РЅР°
			//РџСЂРёРЅРёРјР°СЏ РІС‹СЃРѕС‚Сѓ РІ 768 РїРєСЃРµР»РµР№ Р·Р° СЃС‚Р°РЅРґР°СЂС‚ СЃ СЂР°Р·РјРµСЂРѕРј РІ 1em - 10px

			if ( $(window).width() > 1000 && $(window).height() > 768){
				emValue = $(window).height() / 768;
			}else{
				emValue = 1;
			}

			if ($(window).height() / $(window).width() < 1 ){

				$('body').css('font-size', emValue + 'em' );

			}

			//
			var sectionPadding = $(window).height() * .15,
				sectionHeight = $(window).height();// - sectionPadding * 2;

				//if (sections.length > 1) sectionHeight = sectionHeight + 5;

				//sections.css('height', sectionHeight + 'px' );

				//sections.css('padding', sectionPadding + 'px 0px' );


			//РЎРѕР·РґР°РґРёРј РєРѕРЅС‚РµР№РЅРµСЂС‹ РґР»СЏ РїР°СЂР°Р»Р°РєСЃР° Рё Р·Р°РґР°РґРёРј РёРј РІС‹СЃРѕС‚Сѓ
			paralax.each(function(){

				//Р•СЃР»Рё РЅРµС‚ РѕР±РµСЂС‚РєРё РєРѕРЅС‚РµР№РЅРµСЂР° - СЃРґРµР»Р°РµРј РµРµ
				if ( $(this).parent().hasClass('paralax-container') == false){
					$(this).wrap('<div class="paralax-container"></div>');
				}

				$(this).parent('.paralax-container').css('height', sectionHeight * $(this).data('paralax-height-ratio') + 'px');

				$(this).parent('.paralax-container').css('background', $(this).css('background') );

				$(this).parent('.paralax-container').css('box-sizing', 'border-box' );

			});

		}
		setSectionHeight();



		//РљСЂРѕСЃСЃР±СЂР°СѓР·РµСЂРЅРѕРµ РѕРїР»РµС‚РµР»РµРЅРёРµ РїРѕР·РёС†РёРё СЃРєСЂРѕР»Р»Р°
		var getScrollTop = function(){
		    if(typeof pageYOffset!= 'undefined'){
		        //most browsers except IE before #9
		        return pageYOffset;
		    }
		    else{
		        var B= document.body; //IE 'quirks'
		        var D= document.documentElement; //IE with doctype
		        D= (D.clientHeight)? D: B;
		        return D.scrollTop;
		    }
		};
		var scrollPos = getScrollTop();


		//Р¤СѓРЅРєС†РёСЏ РїР°СЂР°Р»Р°РєСЃ Р±РµРєРіСЂР°СѓРЅРґРѕРІ
		var paralaxBackgroundsMove = function(){

			var top = 0;

			paralaxBackground.each(function(){

				//РµСЃР»Рё РЅРёР¶РЅРёР№ РєСЂР°Р№ СЌРєСЂР°РЅР° РЅРёР¶Рµ С‡РµРј РІРµСЂС…РЅРёР№ РєСЂР°Р№ Р±Р»РѕРєР°
				// Рё РІРµСЂС…РЅРёР№ РєСЂР°Р№ СЌРєСЂР°РЅР° РІС‹С€Рµ РЅРёР¶РЅРµРіРѕ РєСЂР°Р№ Р±Р»РѕРєР°
				if ( scrollPos + $(window).height() >= $(this).position().top
					&& scrollPos <=  $(this).position().top + $(this).outerHeight() ){

					top = ( scrollPos - $(this).position().top ) * .5;

					$(this).css('background-position', '0em ' + toEm( top ) + 'em');

					//console.log( scrollPos + '  ' + $(this).position().top );
					//console.log( '0px ' + top + 'px' );

				}


			});


		}


		//РџРѕРєР°Р·С‹РІР°РµРј Р°РЅРёРјР°С†РёСЋ СЌР»РµРјРµРЅС‚РѕРІ РїСЂРё РїСЂРѕРєСЂСѓС‚РєРµ5
		var paralaxElementsScroll = function(){

            paralax.each(function(){

            	var paralaxContainer = $(this).parent('.paralax-container');
            		paralaxContainerHeight = $(this).data('paralax-height-ratio') * $(this).outerHeight();

		        if ( paralaxContainer.position().top <= scrollPos
		        	&& paralaxContainer.position().top + paralaxContainerHeight - $(this).outerHeight() > scrollPos) {


	            	//РњРµСЂСЏРµРј СЃРєСЂРѕР»Р» РІ СЂР°РјРєР°С… Р±Р»РѕРєР°
	            	paralaxScroll = scrollPos - paralaxContainer.position().top;

	            	//РџСЂРё СЃРєСЂРѕР»Р»Рµ РЅР° СЃРµРєРєС†РёРё РґРѕР±Р°РІР»СЏРµРј РєРѕРЅС‚РµР№РЅРµСЂСѓ РїР°РґРґРёРЅРі
	            	if (paralaxScroll < paralaxContainerHeight){

	            		$(this).addClass('section--fixed');

	            		paralaxContainer.css('padding-top', paralaxScroll );

	            	}else{

	            		$(this).removeClass('section--fixed');

	            	}

	            	//РџСЂРѕРІРµСЂСЏРµРј РєР°Р¶РґС‹Р№ СЌР»РµРјРµРЅС‚ РїР°СЂР°Р»Р°РєСЃР°
	            	$(this).find('[data-paralax-show]').each(function(){

	            		//console.log($(this));

	            		//Р’С‹С‡РёСЃР»СЏРµРј РїРѕС…РёС†РёРё СЃС‚Р°СЂС‚Р° Рё РѕСЃС‚Р°РЅРѕРІРєРё РїРѕ РїСЂРѕС†РµРЅС‚Р°Рј
	            		var paralaxShowPositionStart = paralaxContainerHeight * ( $(this).data('paralax-show-start-percent') / 100);
	            		var paralaxShowPositionStop = paralaxContainerHeight * ( $(this).data('paralax-show-stop-percent') / 100);
	            		var activeClass = $(this).data('paralax-show-class');

	            		if (paralaxScroll >= paralaxShowPositionStart
	            			&& paralaxScroll < paralaxShowPositionStop  ){

	            			if ( $(this).data('paralax-show') === 'roll' ){

		            			//РЈР±РёСЂР°РµРј Р°РєС‚РёРІРЅС‹Р№ РєР»Р°СЃСЃ РґР»СЏ РІСЃРµС…

		             			paralaxShowRoll.removeClass( activeClass );
		             			paralaxShowRoll.removeClass( activeClass + '-siblings' );

		            			//Р”РѕР±Р°РІР»СЏРµРј Р°РєС‚РёРІРЅС‹Р№ РєР»Р°СЃСЃ С‚РµРєСѓС‰РµРјСѓ
		            			$(this).addClass( activeClass );

		            			$(this).next().addClass( activeClass + '-siblings' );
		            			$(this).prev().addClass( activeClass + '-siblings' );

	            			}else{

		            			//РЈР±РёСЂР°РµРј Р°РєС‚РёРІРЅС‹Р№ РєР»Р°СЃСЃ РґР»СЏ РІСЃРµС…
		            			paralaxShowTrue.removeClass( activeClass );

		            			//Р”РѕР±Р°РІР»СЏРµРј Р°РєС‚РёРІРЅС‹Р№ РєР»Р°СЃСЃ С‚РµРєСѓС‰РµРјСѓ
		            			$(this).addClass( activeClass );

	            			}

	            		}else{
	            			//paralaxShow.removeClass( activeClass );
	            		}

	            	});

	            }else{

	            	$(this).removeClass('section--fixed');

	            	if ( scrollPos >= paralaxContainer.position().top ) {

						paralaxContainer.css('padding-top', paralaxContainerHeight - $(this).outerHeight() + 'px' );
						//paralaxContainer.css('height', $(this).outerHeight() + 'px' );

					}else{

						paralaxContainer.css('padding-top', 0 );
						//paralaxContainer.css('height', paralaxContainerHeight + 'px' );

					}

				}

           	});



		}
		paralaxElementsScroll();


		//РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј РІРёРґРµРѕ РµСЃР»Рё РїСЂРѕСЃРєСЂРѕР»Р»РёР»Рё Р·Р° РµРіРѕ РїСЂРµРґРµР»С‹
		var stopVideoOnScroll = function(){

			videoSections.each(function(){

		    if ( $(this).position().top > scrollPos + $(window).height() / 2
		     	|| $(this).position().top + ( $(this).outerHeight() / 2 ) <= scrollPos + 7 ) {

		    var currentVideo = $(this).find('video')[0];

					if (!currentVideo.paused){
						currentVideo.pause();
						$(this).find('.i-play-button').removeClass('i-play-button--pause');
						$(this).find('.video__text').removeClass('video__text--hidden');
					}

	      }

	      //Р Р·Р°РѕРґРЅРѕ СЃРєСЂС‹РІР°РµРј РёР»Рё РїРѕРєР°Р·С‹РІР°РµРј Р·Р°РіРѕР»РѕРІРѕРє РІРёРґРµРѕ
		    if ( $(this).position().top + ( $(this).outerHeight() / 7 ) <= scrollPos + 7 ) {

		    $(this).find('.video__text').addClass('video__text--hidden');

		  	}else{
	      	$(this).find('.video__text').removeClass('video__text--hidden');
	      }

			});

		}


		//РџСЂРµС…РѕРґ РЅР° СЃР»РµРґСѓСЋС‰РёР№ СЃР»Р°Р№Рґ РїРѕСЃР»Рµ РѕСЃС‚Р°РЅРѕРІРєРё РІРёРґРµРѕ
		videos.each(function(){
			//console.log($(this)[0]);
			var videoId = $(this).attr('id');

			$(this)[0].onended = function(e) {

				videoContainer = $('#' + videoId), //РєРѕРЅС‚РµР№РЅРµС‚ <video>
				videoFrame = videoContainer.parent(), //РѕР±РµСЂС‚РєР° РІРёРґРµРѕ
				videoSection = videoFrame.parent(), //РЎРµРєС†РёСЏ РЅР° СЃС‚СЂР°РЅРёС†Рµ, РІ РєРѕС‚РѕСЂРѕР№ СЂР°Р·РјРµС‰РµРЅРѕ РІРёРґРµРѕ
				playButton = videoSection.find('.i-play-button');

				videoFrame.css('opacity', 0);
				videoContainer.css('opacity', 0);

				playButton.removeClass('i-play-button--pause');
				videoSection.find('.video__text').removeClass('video__text--hidden');

				$(this)[0].pause();
				$(this)[0].currentTime = 0;

				if (videoId == 'js-video-one'){
					$('.main-menu a[href="#advantages"]').click();
				}
				if (videoId == 'js-video-two'){
					$('.main-menu a[href="#how"]').click();
				}


    	};

		});



		//Р¤СѓРЅРєС†РёСЏ Рё РѕР±РЅРѕРІР»РµРЅРёСЏ РЅР°РІРёРіР°С†РёРё Рё Р°РЅРёРјР°С†РёРё РїРѕСЏРІР»СЏСЋС‰РёС…СЃСЏ СЌР»РµРјРµРЅС‚РѕРІ
		var changeNavigationStyle = function(){

		    //РћР‘СЂР°Р±РѕС‚РєР° РґР»СЏ РїСѓРЅРєС‚РѕРІ РјРµРЅСЋ Рё СЃРµРєС†РёР№
		    sections.each(function () {
		        //console.log( $(this).position().top );

		        if ( $(this).position().top <= scrollPos
		        	&& $(this).position().top + $(this).outerHeight() >= scrollPos) {

		       		//console.log('$(this).position().top ' + $(this).position().top);
		       		//console.log('scrollPos ' + scrollPos);


		       		var sectionId = $(this).attr('id'),
		            	headerStyle = $(this).data('header');


		            //Р”РµР»Р°РµРј Р°РєС‚РёРІРЅС‹Рј РІСЃРµ СЃСЃС‹Р»РєРё РЅР° СЃРµРєС†РёСЋ
		            navLinks.each(function () {

		            	var className = $(this).data('nav');
		            	$(this).removeClass( className + '__href--active');

		            	if ( $(this).attr('href') == '#' + sectionId){
		            		$(this).addClass( className + '__href--active');
		            	}

		            });

		            //Р—Р°РґР°РµРј СЃС‚РёР»СЊ С…РµРґРµСЂСѓ
		            if (headerStyle != ''){
		            	$('#header').addClass('header--' + headerStyle);
		            }else{
		            	$('#header').removeClass();
		            	$('#header').addClass('header');
		            }

		        }

		        //РјРєРЅСЏРµРј С„РѕРЅ Сѓ Р·РЅР°С‡РєР° 16+
		        if ( $(this).position().top <= scrollPos + $(this).outerHeight() - 60
		        	&& $(this).position().top + $(this).outerHeight() >= scrollPos + $(this).outerHeight() - 50 ) {

		        	var headerStyle = $(this).data('header');

		            if (headerStyle != ''){
		            	$('#sixteen').addClass('sixteen--' + headerStyle);
		            }else{
		            	$('#sixteen').removeClass();
		            	$('#sixteen').addClass('sixteen');
		            }

		        }


		    });

		}
		changeNavigationStyle();

		//РћР±СЂР°Р±РѕС‚РєР° СЃРєСЂРѕР»Р»Р°
		$(document).scroll(function(){

			scrollPos = getScrollTop();

			paralaxBackgroundsMove();

			changeNavigationStyle();

			paralaxElementsScroll();

			stopVideoOnScroll();

		});

		//РћР±СЂР°Р±РѕС‚РєР° СЂРµСЃР°Р№Р·Р°
		$(window).resize(function(){

			scrollPos = getScrollTop();

			setSectionHeight();

			paralaxElementsScroll();

		});



		//Р—Р°РїСѓСЃРє РІРёРґРµРѕ РїРѕ РєР»РёРєРµ РЅР° РєРЅРѕРїРєРµ
		$('.js-play').on('click touchstart', function(){
			var videoId = $(this).data('video'), //Р°РґРё РІРёРґРµРѕ
				videoContainer = $('#js-' + videoId), //РєРѕРЅС‚РµР№РЅРµС‚ <video>
				videoFrame = videoContainer.parent(), //РѕР±РµСЂС‚РєР° РІРёРґРµРѕ
				videoSection = videoFrame.parent(), //РЎРµРєС†РёСЏ РЅР° СЃС‚СЂР°РЅРёС†Рµ, РІ РєРѕС‚РѕСЂРѕР№ СЂР°Р·РјРµС‰РµРЅРѕ РІРёРґРµРѕ
				video = videoContainer[0], //СЃР°РјРѕ РІРёРґРµРѕ
				playButton = videoSection.find('.i-play-button');

				if (video.paused){

					//Р—Р°РїСѓСЃРєР°РµРј РІРёРґРµРѕ
					video.play();
					playButton.addClass('i-play-button--pause');
					videoSection.find('.video__text').addClass('video__text--hidden');

					setTimeout( function(){
						hidePauseButton();
					}, 3000);

					//videoSection.find('.video__text').fadeOut();

				  videoFrame.css('opacity', 1);
				  videoContainer.css('opacity', 1);


				}else{
					video.pause();
					clearTimeout(hidePauseButtonTimeout);
					hidePauseButtonTimeout = false;
					playButton.removeClass('i-play-button--pause');
					videoSection.find('.video__text').removeClass('video__text--hidden');
				}

			return false;
		});

		//hide pause button
		var hidePauseButtonTimeout = false;

		var hidePauseButton = function(){
			hidePauseButtonTimeout = setTimeout( function(){
				playButtons.fadeOut();
			}, 1000);
		};

		//show pause button on mousemove
		$(window).on('mousemove', function(){
			//console.log('fadein');
			if (hidePauseButtonTimeout !== false){

				playButtons.fadeIn('fast');
				clearTimeout(hidePauseButtonTimeout);
				hidePauseButton( );
			}
		});

		//Р—РІСѓРє РІРёРґРµРѕ
		$('.js-volume').on('click touchstart', function(){
			var videoId = $(this).data('video'), //Р°РґРё РІРёРґРµРѕ
				videoContainer = $('#js-' + videoId), //РєРѕРЅС‚РµР№РЅРµС‚ <video>
				videoFrame = videoContainer.parent(), //РѕР±РµСЂС‚РєР° РІРёРґРµРѕ
				videoSection = videoFrame.parent(), //РЎРµРєС†РёСЏ РЅР° СЃС‚СЂР°РЅРёС†Рµ, РІ РєРѕС‚РѕСЂРѕР№ СЂР°Р·РјРµС‰РµРЅРѕ РІРёРґРµРѕ
				video = videoContainer[0]; //СЃР°РјРѕ РІРёРґРµРѕ
				muteButton = videoSection.find('.i-volume-button');

				if ( videoContainer.prop('muted') !== true){
					videoContainer.prop('muted', true);
					muteButton.addClass('i-volume-button--mute');
				}else{
					videoContainer.prop('muted', false);
					muteButton.removeClass('i-volume-button--mute');
				}

				return false;

		});


		//РљРђСЂСѓСЃРµР»СЊ
		/*$('.slider__item').clone().appendTo('.slider__list'); //Р”Р»СЏ РєСЂСѓРіРѕРІРѕР№ РїСЂРѕРєСЂСѓС‚РєРё РЅР°РґРѕ СЃРѕР·РґР°С‚СЊ РґСѓР±Р»Рё
        $("#slider").AnimatedSlider({
        	prevButton: "#js-slider-prev",
	        nextButton: "#js-slider-next",
	        visibleItems: 5,
	        infiniteScroll: true,
	        willChangeCallback: function(obj, item) { },
	        changedCallback: function(obj, item) { }
	    });*/

		//РџР»Р°РІРЅРѕРµ РїРµСЂРµРјРµС‰РµРЅРёРµ Рє СЏРєРѕСЂСЋ РїСЂРё РєР»РёРєРµ РІ РјРµРЅСЋ
		navLinks.on('click touchstart', function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

				var target = $(this.hash);

				target = target.length ? target : $('#' + this.hash.slice(1) +'');

				var targetParent = target.parent('.paralax-container');

				if ( targetParent.length == 1 ) target = targetParent;

				var scrollPos = getScrollTop(),
						targetPosiotionTop = target.offset().top + 1,
						speed = Math.abs(scrollPos - targetPosiotionTop);

				if (speed > 2000) speed = 500;

				//console.log(target.offset().top);


					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top + 1 // - 59
						}, speed,
						'linear');
					return false;
				}
			}
		});


	});

}());

$(document).ready(function() {
  function windowSize(){
    if($(window).width() < 768)
    {
      $("section").removeAttr("id");
      $(".header-mob").css("display", "none");
    }
  }
  $(window).on('load resize',windowSize);
  /*$(window).resize(function(){
    var windowWidth = $(window).width();
    console.log('1111');
    if(windowWidth < 768) $("section").removeAttr("id");
    //else $("section").attr('id', 'pg1_scr1');;
  });*/
});
