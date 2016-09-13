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
        img: "../img/pano.jpg",
        interval: 6000,
        speed: 400
    });

    pano.moveLeft();
    pano.stopMoving();
    pano.moveRight();
    pano.stopMoving();

});
jQuery(document).ready(function($) {
    $('div.content').css('display', 'block');

    var onMouseOutOpacity = 0.67; // initial opacity
    $('#thumbs ul.thumbs li, div.navigation a.pageLink').opacityrollover({ // onhover styles
        mouseOutOpacity:   onMouseOutOpacity,
        mouseOverOpacity:  1.0,
        fadeSpeed:         'fast',
        exemptionSelector: '.selected'
    });

    var gallery = $('#thumbs').galleriffic({ // initialization of Galleriffic plugin
        delay:                     2500,
        numThumbs:                 8,
        preloadAhead:              8,
        enableTopPager:            false,
        enableBottomPager:         false,
        imageContainerSel:         '#slideshow',
        controlsContainerSel:      '#controls',
        captionContainerSel:       '#caption',
        loadingContainerSel:       '#loading',
        renderSSControls:          true,
        renderNavControls:         true,
        playLinkText:              'Play Slideshow',
        pauseLinkText:             'Pause Slideshow',
        prevLinkText:              'Previous Photo',
        nextLinkText:              'Next Photo',
        nextPageLinkText:          'Next &rsaquo;',
        prevPageLinkText:          '&lsaquo; Prev',
        enableHistory:             true,
        autoStart:                 false,
        syncTransitions:           true,
        defaultTransitionDuration: 900,
        onSlideChange:             function(prevIndex, nextIndex) {
            this.find('ul.thumbs').children()
                .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                .eq(nextIndex).fadeTo('fast', 1.0);
        },
        onPageTransitionOut:       function(callback) {
            this.fadeTo('fast', 0.0, callback);
        },
        onPageTransitionIn:        function() {
            var prevPageLink = this.find('a.prev').css('visibility', 'visible');
            var nextPageLink = this.find('a.next').css('visibility', 'visible');

            if (this.displayedPage > 0)
                prevPageLink.css('visibility', 'visible');

            var lastPage = this.getNumPages() - 1;
            if (this.displayedPage < lastPage)
                nextPageLink.css('visibility', 'visible');

            this.fadeTo('fast', 1.0);
        }
    });

    gallery.find('a.prev').click(function(e) { // other event handlers - Prev/Next links
        gallery.previousPage();
        e.preventDefault();
    });

    gallery.find('a.next').click(function(e) {
        gallery.nextPage();
        e.preventDefault();
    });

    // integration with jquery.history
    function pageload(hash) {
        if (hash) {
            $.galleriffic.gotoImage(hash);
        } else {
            gallery.gotoIndex(0);
        }
    }

    //$.historyInit(pageload, 'system.html');
});
jQuery(document).ready(function($) {
    $('div.content').css('display', 'block');

    var onMouseOutOpacity = 0.67; // initial opacity
    $('#thumbs2 ul.thumbs li, div.navigation a.pageLink').opacityrollover({ // onhover styles
        mouseOutOpacity:   onMouseOutOpacity,
        mouseOverOpacity:  1.0,
        fadeSpeed:         'fast',
        exemptionSelector: '.selected'
    });

    var gallery = $('#thumbs2').galleriffic({ // initialization of Galleriffic plugin
        delay:                     2500,
        numThumbs:                 8,
        preloadAhead:              8,
        enableTopPager:            false,
        enableBottomPager:         false,
        imageContainerSel:         '#slideshow2',
        controlsContainerSel:      '#controls',
        captionContainerSel:       '#caption',
        loadingContainerSel:       '#loading',
        renderSSControls:          true,
        renderNavControls:         true,
        playLinkText:              'Play Slideshow',
        pauseLinkText:             'Pause Slideshow',
        prevLinkText:              'Previous Photo',
        nextLinkText:              'Next Photo',
        nextPageLinkText:          'Next &rsaquo;',
        prevPageLinkText:          '&lsaquo; Prev',
        enableHistory:             true,
        autoStart:                 false,
        syncTransitions:           true,
        defaultTransitionDuration: 900,
        onSlideChange:             function(prevIndex, nextIndex) {
            this.find('ul.thumbs').children()
                .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                .eq(nextIndex).fadeTo('fast', 1.0);
        },
        onPageTransitionOut:       function(callback) {
            this.fadeTo('fast', 0.0, callback);
        },
        onPageTransitionIn:        function() {
            var prevPageLink = this.find('a.prev').css('visibility', 'visible');
            var nextPageLink = this.find('a.next').css('visibility', 'visible');

            if (this.displayedPage > 0)
                prevPageLink.css('visibility', 'visible');

            var lastPage = this.getNumPages() - 1;
            if (this.displayedPage < lastPage)
                nextPageLink.css('visibility', 'visible');

            this.fadeTo('fast', 1.0);
        }
    });

    gallery.find('a.prev').click(function(e) { // other event handlers - Prev/Next links
        gallery.previousPage();
        e.preventDefault();
    });

    gallery.find('a.next').click(function(e) {
        gallery.nextPage();
        e.preventDefault();
    });

    // integration with jquery.history
    function pageload(hash) {
        if (hash) {
            $.galleriffic.gotoImage(hash);
        } else {
            gallery.gotoIndex(0);
        }
    }

    //$.historyInit(pageload, 'system.html');
});
jQuery(document).ready(function($) {
    $('div.content').css('display', 'block');

    var onMouseOutOpacity = 0.67; // initial opacity
    $('#thumbs3 ul.thumbs li, div.navigation a.pageLink').opacityrollover({ // onhover styles
        mouseOutOpacity:   onMouseOutOpacity,
        mouseOverOpacity:  1.0,
        fadeSpeed:         'fast',
        exemptionSelector: '.selected'
    });

    var gallery = $('#thumbs3').galleriffic({ // initialization of Galleriffic plugin
        delay:                     2500,
        numThumbs:                 8,
        preloadAhead:              8,
        enableTopPager:            false,
        enableBottomPager:         false,
        imageContainerSel:         '#slideshow3',
        controlsContainerSel:      '#controls',
        captionContainerSel:       '#caption',
        loadingContainerSel:       '#loading',
        renderSSControls:          true,
        renderNavControls:         true,
        playLinkText:              'Play Slideshow',
        pauseLinkText:             'Pause Slideshow',
        prevLinkText:              'Previous Photo',
        nextLinkText:              'Next Photo',
        nextPageLinkText:          'Next &rsaquo;',
        prevPageLinkText:          '&lsaquo; Prev',
        enableHistory:             true,
        autoStart:                 false,
        syncTransitions:           true,
        defaultTransitionDuration: 900,
        onSlideChange:             function(prevIndex, nextIndex) {
            this.find('ul.thumbs').children()
                .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                .eq(nextIndex).fadeTo('fast', 1.0);
        },
        onPageTransitionOut:       function(callback) {
            this.fadeTo('fast', 0.0, callback);
        },
        onPageTransitionIn:        function() {
            var prevPageLink = this.find('a.prev').css('visibility', 'visible');
            var nextPageLink = this.find('a.next').css('visibility', 'visible');

            if (this.displayedPage > 0)
                prevPageLink.css('visibility', 'visible');

            var lastPage = this.getNumPages() - 1;
            if (this.displayedPage < lastPage)
                nextPageLink.css('visibility', 'visible');

            this.fadeTo('fast', 1.0);
        }
    });

    gallery.find('a.prev').click(function(e) { // other event handlers - Prev/Next links
        gallery.previousPage();
        e.preventDefault();
    });

    gallery.find('a.next').click(function(e) {
        gallery.nextPage();
        e.preventDefault();
    });

    // integration with jquery.history
    function pageload(hash) {
        if (hash) {
            $.galleriffic.gotoImage(hash);
        } else {
            gallery.gotoIndex(0);
        }
    }

    //$.historyInit(pageload, 'system.html');
});
