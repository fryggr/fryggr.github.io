// РїСЂРѕРІРµСЂРєР° РїРѕРґРґРµСЂР¶РєРё html5 video
var isHTML5Video        = (typeof(document.createElement('video').canPlayType) != 'undefined');
var vid_init            = [false, false]    // true РєРѕРіРґР° РІРёРґРµРѕ Р·Р°РіСЂСѓР¶РµРЅРѕ
var first_load          = true;             // 1Р°СЏ Р·Р°РіСЂСѓР·РєР°
var timer_send_ok       = false;
var cr_nm_pg            = 1;
var map;
var marker;

// СЃРєСЂРѕР»Р» СЌРєСЂР°РЅР°РјРё
var block_scroll        = false;
var timer_scrl_bl_end   = false;
var last_scroll_top     = 0;

// РІРёРґРµРѕ Р·Р°РґРµСЂР¶РєР°
var on_timer_video      = true;         // РІРєР»./РѕС‚РєР». Р·Р°РґРµСЂР¶РєСѓ (РµСЃР»Рё РѕС‚РєР»СЋС‡РёС‚СЊ, РґР»СЏ РІСЃРµС… С‚РµРіРѕРІ video РЅСѓР¶РЅРѕ РґРѕР±Р°РІРёС‚СЊ autoplay)
var timer_video         = false;        // РЅРµ РјРµРЅСЏС‚СЊ
var play_timer_video    = 3;            // Р·Р°РґРµСЂР¶РєР° Р·Р°РїСѓСЃРєР° РІРёРґРµРѕ РІ СЃРµРє РїРѕСЃР»Рµ Р·Р°РіСЂСѓР·РєРё СЃС‚СЂР°РЅРёС†С‹

var timer_1             = false;        // РґР»СЏ СѓСЃРєРѕСЂРµРЅРёСЏ СЃРєСЂРѕР»Р°

(function($) {
	'use strict';
	new WOW().init();       // Р°РЅРёРјР°С†РёСЏ

    update_full_height();   // Р±Р»РѕРєРё РЅР° РІСЃСЋ РІС‹СЃРѕС‚Сѓ СЌРєСЂР°РЅР°

    //if (isHTML5Video) {
        // РїРѕСЃР»Рµ Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ - РёР·РјРµРЅРёС‚СЊ СЂР°Р·РјРµСЂС‹ Рё Р·Р°РїСѓСЃС‚РёС‚СЊ
        $('#vidd').on('loadedmetadata', function() {
            vid_init[0] = true;
            set_vid_size(1);
        });

        $('#vidd2').on('loadedmetadata', function() {
            vid_init[1] = true;
            set_vid_size(2);
        });
    //}


	/*
	Smooth scroll
	=========================== */
	$('.btn-scroll').smoothScroll({offset: -80});
	$('.btn-scroll2').smoothScroll();

    // РІРёРґРµРѕ РЅР° РїР°СѓР·Сѓ РІРѕ РІСЂРµРјСЏ Р°РІС‚РѕСЃРєСЂРѕР»Р»Р°
    $('.btn-scroll2, .btn-scroll').on('click', function(event){
        pause_on_scroll();
    });

    // РїСЂРёРјРµСЂС‹ СЂР°Р±РѕС‚, С‡РёС‚Р°С‚СЊ РѕС‚Р·С‹РІ РїРѕР»РЅРѕСЃС‚СЊСЋ
    $('.work_it_inf_rv_gr_inn a').click(function() {

        $(this).parent().find('.work_it_inf_rv_gr_more').slideDown('fast');
        $(this).hide();
        event.preventDefault();
	});

    // РІРµСЂС…РЅРµРµ РјРµРЅСЋ, Р±Р»РѕРєРёСЂРѕРІРєР° Р°РєС‚РёРІРЅРѕРіРѕ СЂР°Р·РґРµР»Р°
    $('.top_menu a').on('click', function(event){
        if ( $(this).hasClass('act') ) {
            event.preventDefault();
        }
    });

    // Р·Р°РєСЂС‹С‚СЊ РѕРєРЅРѕ Р·Р°СЏРІРєРё
    $(document).on("click", '#fade2', function() {
        hide_form_send();
    });


    $(window).resize(function() {
        strel_cikl();           // Р±Р»РѕРє СЃРѕ СЃСЂРµР»РєР°РјРё С„РѕСЂРјРёСЂРѕРІР°РЅРёРµ
        update_full_height();   // Р±Р»РѕРєРё РЅР° РІСЃСЋ РІС‹СЃРѕС‚Сѓ СЌРєСЂР°РЅР°
        set_vid_size(1);        // РїРѕСЃР»Рµ Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ - РёР·РјРµРЅРёС‚СЊ СЂР°Р·РјРµСЂС‹ Рё Р·Р°РїСѓСЃС‚РёС‚СЊ
        set_vid_size(2);        // РїРѕСЃР»Рµ Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ - РёР·РјРµРЅРёС‚СЊ СЂР°Р·РјРµСЂС‹ Рё Р·Р°РїСѓСЃС‚РёС‚СЊ
        header_fix();           // С€Р°РїРєР° СЃРєСЂРѕР»Р»
        pos_to_last_pg();
        nav_rg_hover();         // РѕРїСЂРµРґРµР»РµРЅРёРµ Р°РєС‚РёРІРЅРѕР№ СЃРµРєС†РёРё Рё РІС‹РґРµР»РµРЅРёРµ С‚РѕС‡РєРё РјРµРЅСЋ СЃРїСЂР°РІР°
        corr_pos();             // РІС‹СЃРѕС‚Р° РєР°СЂС‚С‹ Рё С‚РµРЅРё РІ РєРѕРЅС‚Р°РєС‚Р°С…
        form_send_resize();     // РїРѕР·РёС†РёСЏ С„РѕСЂРјС‹ РѕР±РЅРѕРІРёС‚СЊ
        center_gmap(500);       // С†РµРЅС‚СЂРёСЂРѕРІР°С‚СЊ РєР°СЂС‚Сѓ С‡РµСЂРµР· 0.5 СЃРµРє.
    });


    $(window).scroll(function() {

        clearTimeout(timer_1);
        timer_1 = setTimeout(function() {   // РґР»СЏ СѓСЃРєРѕСЂРµРЅРёСЏ СЃРєСЂРѕР»Р°
             nav_rg_hover();         // РѕРїСЂРµРґРµР»РµРЅРёРµ Р°РєС‚РёРІРЅРѕР№ СЃРµРєС†РёРё Рё РІС‹РґРµР»РµРЅРёРµ С‚РѕС‡РєРё РјРµРЅСЋ СЃРїСЂР°РІР°
             form_send_resize();     // РїРѕР·РёС†РёСЏ С„РѕСЂРјС‹ РѕР±РЅРѕРІРёС‚СЊ
             ch_lock_top_menu();
        }, 50);

        header_fix();               // С€Р°РїРєР° СЃРєСЂРѕР»Р»
    });

    nav_rg_hover(); // РѕРїСЂРµРґРµР»РµРЅРёРµ Р°РєС‚РёРІРЅРѕР№ СЃРµРєС†РёРё Рё РІС‹РґРµР»РµРЅРёРµ С‚РѕС‡РєРё РјРµРЅСЋ СЃРїСЂР°РІР°

    header_fix();   // С€Р°РїРєР° СЃРєСЂРѕР»Р»

    init_gmap();    // РіСѓРіР» РєР°СЂС‚Р° РёРЅРёС†РёР°Р»РёР·Р°С†РёСЏ, СЃС‚РёР»Рё

    strel_cikl();   // Р±Р»РѕРє СЃРѕ СЃСЂРµР»РєР°РјРё С„РѕСЂРјРёСЂРѕРІР°РЅРёРµ

    animate_set();  // Р·Р°РїСѓСЃРє Р°РЅРёРјР°С†РёРё РЅР°РєР»РѕРЅРЅС‹С… Р»РёРЅРёР№

    corr_pos();     // РІС‹СЃРѕС‚Р° РєР°СЂС‚С‹ Рё С‚РµРЅРё РІ РєРѕРЅС‚Р°РєС‚Р°С…

    if (on_timer_video) {
        set_timer_video_init();
    }

    // СЃРєСЂРѕР»Р» СЌРєСЂР°РЅР°РјРё
    $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
        init_scroll(event);
    });

    // РІРєР»СЋС‡РёС‚СЊ РїРѕРґСЃРєР°Р·РєРё РЅР° РєСЂСѓР¶РєР°С…
    $('.popovv').popover({
        'html': true,
        'trigger': 'hover'
    });

    $('.page1_vid_black').addClass('set');

})(jQuery);


// РєРѕРіРґР° СЃРєСЂРѕР»Р» РѕСЃС‚Р°РЅР°РІР»РёРІР°РµС‚СЃСЏ
$.fn.scrollStopped = function(callback) {
    var $this = $(this), self = this;
    $this.scroll(function(){
        if ($this.data('scrollTimeout')) {
          clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback,250,self));
    });
};


// РєРѕРіРґР° СЃРєСЂРѕР»Р» РѕСЃС‚Р°РЅР°РІР»РёРІР°РµС‚СЃСЏ - РІРёРґРµРѕ РїР»РµР№
$(window).scrollStopped(function(){

    if ( vid_init[0] ) {

        $('.page1_vid video').get(0).play();
    }

    if ( vid_init[1] ) {

        $('.page2_vid video').get(0).play();
    }
});


// РІРёРґРµРѕ РЅР° РїР°СѓР·Сѓ РІРѕ РІСЂРµРјСЏ Р°РІС‚РѕСЃРєСЂРѕР»Р»Р°
function pause_on_scroll() {

    if ( vid_init[0] ) {

        $('.page1_vid video').get(0).pause();
    }

    if ( vid_init[1] ) {

        $('.page2_vid video').get(0).pause();
    }
}


function pos_to_last_pg() {

    if ($('.navscroll').length == 0) { return; }

    var t = cr_nm_pg;

    var t1 = $('.navscroll:eq('+(t-1)+')').attr('href');
    //alert(t1);
    $(document).scrollTop( $(t1).position().top);
}


// СЃРєСЂРѕР»Р» СЌРєСЂР°РЅР°РјРё
function init_scroll(event, delta) {

    if (block_scroll) {
        event.preventDefault();
        return;
    }

    var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var wh          = $(window).height();
    var dh          = $(document).height();
    var ds          = $(document).scrollTop();
    var nm_pg_all   = $('.navscroll').length;

    // Р’РќРР—
    if (delta < 0) {

        if (cr_nm_pg > (nm_pg_all-1)) {
            last_scroll_top = 0;
            return;
        }

        var t = $('.navscroll:eq('+cr_nm_pg+')').attr('href');

        var t1 = $('.navscroll:eq('+(cr_nm_pg-1)+')').attr('href');

        var pt = $(t1).position().top;

        var th = $(t1).height();


        if ( ( ds + wh ) > (pt + th + delta)  ) {

            last_scroll_top++;

            event.preventDefault();

            if ( (( ds + wh + 3 ) > (pt + th)) && (last_scroll_top == 1) ) {

                block_scroll = true;

                last_scroll_top = 0;

                // РІРёРґРµРѕ РЅР° РїР°СѓР·Сѓ РІРѕ РІСЂРµРјСЏ Р°РІС‚РѕСЃРєСЂРѕР»Р»Р°
                pause_on_scroll();

                $.scrollTo( $(t), 500, { onAfter:function() {

                    //ch_lock_top_menu();

                    block_scroll = true;

                    set_timer_scrl_bl_end(100);

                }} );

            } else {

                if (last_scroll_top > 1) last_scroll_top = 0;

                $(document).scrollTop(pt + th - wh);

                block_scroll = true;

                set_timer_scrl_bl_end(300);

                return;
            }
        }

    // Р’Р’Р•Р РҐ
    } else {

        if (cr_nm_pg < 2) {
            last_scroll_top = 0;
            return;
        }

        var t = $('.navscroll:eq('+(cr_nm_pg-2)+')').attr('href');

        var t1 = $('.navscroll:eq('+(cr_nm_pg-1)+')').attr('href');

        var pt = $(t1).position().top;

        var th = $(t1).height();


/* -------------------------------------------------------------------------- */

        if ( ( ds - delta ) < pt ) {

            last_scroll_top++;

            event.preventDefault();

            if ( ((ds-3) < pt) && (last_scroll_top == 1) ) {

                block_scroll = true;

                last_scroll_top = 0;

                // РІРёРґРµРѕ РЅР° РїР°СѓР·Сѓ РІРѕ РІСЂРµРјСЏ Р°РІС‚РѕСЃРєСЂРѕР»Р»Р°
                pause_on_scroll();

                $.scrollTo( $(t), 500, { onAfter:function() {

                    //ch_lock_top_menu();

                    block_scroll = true;

                    set_timer_scrl_bl_end(100);

                }} );

            } else {

                if (last_scroll_top > 1) last_scroll_top = 0;

                $(document).scrollTop(pt);

                block_scroll = true;

                set_timer_scrl_bl_end(300);

                return;
            }
        }
    }

    set_timer_scrl_bl_end(1000);
}

// РІРµСЂС…РЅРµРµ РјРµРЅСЋ Рѕ РЅР°СЃ, РѕС‚Р·С‹РІС‹, РїСЂРѕРІРµСЂРєР° Р°РєС‚РёРІРЅРѕСЃС‚Рё
function ch_lock_top_menu() {

    var t1 = $('.navscroll:eq('+(cr_nm_pg-1)+')').attr('href');

    if (t1 == '#pg1_scr3') {
        $('.top_menu a:eq(5)').addClass('act');
    } else {
        $('.top_menu a:eq(5)').removeClass('act');
    }
    if (t1 == '#pg1_scr1') {
        $('.top_menu a:eq(0)').addClass('act');
    } else {
        $('.top_menu a:eq(0)').removeClass('act');
    }
}

function set_timer_scrl_bl_end(t) {

    clearTimeout(timer_scrl_bl_end);

    timer_scrl_bl_end = setTimeout(function() {
        block_scroll = false;
    }, t);
}




// РѕРїСЂРµРґРµР»РµРЅРёРµ Р°РєС‚РёРІРЅРѕР№ СЃРµРєС†РёРё Рё РІС‹РґРµР»РµРЅРёРµ С‚РѕС‡РєРё РјРµРЅСЋ СЃРїСЂР°РІР°
function nav_rg_hover() {

    nm_pg = 1;

    $('.navscroll').each(function() {

        var t = $(this).attr('href');

        var pt = $(t).position().top;
        var wh = $(window).height();
        var dh = $(document).height();
        var ds = $(document).scrollTop();
        var th = $(t).height();
        var th2 = th/2;

        if ((ds+wh) > (dh-100) ) {

            $('#right_paginat .active').removeClass('active');
            $('.navscroll:last').addClass('active');
            cr_nm_pg = $('#right_paginat li').index($('.navscroll:last').parent())+1;

            return;

        } else {

            if ( ( ds + wh/2 > pt ) && (ds + wh/2 < pt + th) ) {

                $(this).addClass('active');
                cr_nm_pg = nm_pg;

            } else {
                $(this).removeClass('active');
            }
        }
        nm_pg ++;
    });
}

// С€Р°РїРєР° СЃРєСЂРѕР»Р»
function header_fix() {

    var w = $(window);

    if (w.width() > 479)
        return;

    $('.header_fix').css('marginLeft', '-'+w.scrollLeft()+'px');
}




// Р±Р»РѕРє СЃРѕ СЃСЂРµР»РєР°РјРё С„РѕСЂРјРёСЂРѕРІР°РЅРёРµ
function strel_cikl() {

    if ( $('.strel_cikl').length ) {

        $('.pg3_scr4_inn2').width('100%');

        $('.pg3_scr4_item').removeClass('rg').removeClass('lf').removeClass('no').removeClass('str_rev');

        var t1 = $('.pg3_scr4_inn').width();
        var t2 = Math.floor( t1 /  $('.pg3_scr4_item').width());

        $('.pg3_scr4_item:nth-child('+(t2*2)+'n-'+t2+')').addClass('rg');           // СЃРїСЂР°РІР° РІРЅРёР·
        $('.pg3_scr4_item:nth-child('+(t2*2)+'n-'+(t2*2)+')').addClass('lf');       // СЃР»РµРІР° РІРЅРёР·

        $('.pg3_scr4_item:nth-child('+(t2*2)+'n+'+1+')').addClass('no');            // РЅРµС‚ СЃС‚СЂРµР»РєРё

        for (var i = 0; i<t2; i++) {
            $('.pg3_scr4_item:nth-child('+(t2*2)+'n-'+i+')').addClass('str_rev');   // СЃС‚СЂРµР»РєР° РІР»РµРІРѕ
        }

        $('.pg3_scr4_item:last').removeClass('rg').removeClass('lf');

        if ( $('.pg3_scr4_item:last').hasClass('str_rev') ) {
            $('.pg3_scr4_item:last').addClass('no');
        }

        $('.pg3_scr4_inn2').width(t2*$('.pg3_scr4_item').width());
    }
}



// РІС‹СЃРѕС‚Р° РєР°СЂС‚С‹ Рё С‚РµРЅРё РІ РєРѕРЅС‚Р°РєС‚Р°С…
function corr_pos() {

    var wh = $(window).height();
    var dw = $(window).width();

    var t = $('.container').offset().left;

    if (t < -10) t=-10;

    //alert(dw)

    if ( $('.cr_wd_768').is(':visible') ) {
        //alert(1);
        $('#map-canvas, .pg1_scr5_col_rg_shadow_h').css('marginTop', $('.pg1_scr5_col_lf2').height()+'px');
        $('.pg1_scr5_col_lf2').offset({left:0});
    } else {
        $('#map-canvas, .pg1_scr5_col_rg_shadow_h').css('marginTop', '0px');
        $('.pg1_scr5_col_lf2').offset({left:(t+10)});
    }

    if ( $('.work_item_vid_lf').length > 0 ) {
        var t = $('.work_item_vid_lf').width();
        var t1 = t/16*9+1;
        $('.work_item_vid_lf').height(t1);
    }
}

// Р·Р°РїСѓСЃРє Р°РЅРёРјР°С†РёРё РЅР°РєР»РѕРЅРЅС‹С… Р»РёРЅРёР№
function animate_set() {
    $('.anim_set').addClass('anim_no').removeClass('anim_set');
    $('.anim').removeClass('anim_no').addClass('anim_set');
}






// СЂР°Р·РјРµСЂС‹ РІРёРґРµРѕ РїРѕРґРѕРіРЅР°С‚СЊ РїРѕРґ СЌРєСЂР°РЅ
function set_vid_size(nm) {

    if ( !vid_init[(nm-1)] ) {
        return;
    }

    var ww = $('.page'+nm+'_vid').width();
    var hh = $('.page'+nm+'_vid').height();
    $('.page'+nm+'_vid').show();

    var wd, hg,
        $vidwidth = $('.page'+nm+'_vid video').get(0).videoWidth,
        $vidheight = $('.page'+nm+'_vid video').get(0).videoHeight,
        $aspectRatio = $vidwidth / $vidheight;

    var asp2 = ($('.page'+nm+'_vid').width() / $('.page'+nm+'_vid').height());

    if (asp2 < $aspectRatio) {

        hg = $('.page'+nm+'_vid').height();
        wd = hg*$aspectRatio;

        $('.page'+nm+'_vid video').height(hg).width(wd);

        $('.page'+nm+'_vid').scrollLeft((wd-ww)/2);

    } else {

        wd = $('.page'+nm+'_vid').width();
        hg = wd / $aspectRatio;

        $('.page'+nm+'_vid video').height(hg).width(wd);

        $('.page'+nm+'_vid').scrollTop((hg-hh)/2);
        $('.vid_top').scrollTop(0);
    }

/*
    if ( vid_init[nm-1] ) {
         $('.page'+nm+'_vid video').get(0).play();
    }
*/
}


function set_timer_video_init() {

    if ( vid_init[0] ) {

        timer_video = setTimeout(function() {
            $('.page1_vid video').get(0).play();
        }, (play_timer_video*1000) );
    }

    if ( vid_init[1] ) {

        timer_video = setTimeout(function() {
            $('.page2_vid video').get(0).play();
        }, (play_timer_video*1000) );
    }

    if (!(vid_init[0]&&vid_init[1])) {
        setTimeout(set_timer_video_init, 500);
    }
}




// Р±Р»РѕРєРё РЅР° РІСЃСЋ РІС‹СЃРѕС‚Сѓ СЌРєСЂР°РЅР°
function update_full_height() {

    $('.full_height').each(function() {

        var wh          = $(window).height();
        var th          = $(this);
        var hmax        = th.find('.full_height_max');              // РјР°РєСЃ РІС‹СЃРѕС‚Р° СЃРµРєС†РёРё
        var hcn         = th.find('.full_height_inn_cent');         // Р±Р»РѕРє РїРѕ С†РµРЅС‚СЂСѓ СЃ РєРѕРЅС‚РµРЅС‚РѕРј
        var menu_hg     = $('.header_fix').height()+30;             // РІС‹СЃРѕС‚Р° РјРµРЅСЋ
        var fix2        = (hcn.data('fix2'))?hcn.data('fix2'):0;    // СѓРјРµРЅСЊС€РёС‚СЊ РјР°РєСЃ РІС‹СЃРѕС‚Сѓ СЌРєСЂР°РЅР°
        var fix3        = (hcn.data('fix3'))?hcn.data('fix3'):0;    // РѕС‚СЃС‚СѓРї СЃРІРµСЂС…Сѓ РґР»СЏ С†РµРЅС‚СЂР°Р»СЊРЅРѕРіРѕ Р±Р»РѕРєР° РїСЂРё РјР°СЃС€С‚Р°Р±.
        var fix_y       = (hcn.data('fix'))?hcn.data('fix'):false;  // РіР»РѕР± РѕС‚СЃС‚СѓРї СЃРІРµСЂС…Сѓ РґР»СЏ С†РµРЅС‚СЂ Р±Р»РѕРєР°
        var min768      = ((hcn.data('min768') )? $('.cr_wd_768').is(':visible') : false);  // РїСЂРё С€РёСЂРёРЅРµ <=768
        var next_lnk_hg = 100;                                      // РІС‹СЃРѕС‚Р° СЃС‚СЂРµР»РєРё РІРЅРёР·
        var next_lnk    = th.find('.next_lnk');
        var ctop        = 0;
        var res_hg      = 0;

        if (next_lnk.length == 0) { next_lnk_hg = 0; }

        var n_max = hcn.height() + menu_hg + next_lnk_hg;

        // РІС‹СЃРѕС‚Р° Р±Р»РѕРєР° Р±РѕР»СЊС€Рµ РІС‹СЃРѕС‚С‹ СЌРєСЂР°РЅР°
        if ( (n_max > wh) || min768 ) {

            ctop = menu_hg;
            res_hg = n_max-fix2;

            if (min768) {
                res_hg = res_hg-40;
            }

        // РІС‹СЃРѕС‚Р° Р±Р»РѕРєР° РјРµРЅСЊС€Рµ, РјР°СЃС€С‚Р°Р±РёСЂСѓРµС‚СЃСЏ РїРѕРґ РІС‹СЃРѕС‚Сѓ СЌРєСЂР°РЅР°
        } else {

            ctop = (wh - hcn.height())/2 + fix3;
            res_hg = wh;
        }

        hmax.height(res_hg);
        th.height(res_hg);

        if (fix_y) { ctop+= fix_y*1; }

        // С†РµРЅС‚СЂ Р±Р»РѕРє, РѕС‚СЃС‚СѓРї СЃРІРµСЂС…Сѓ
        hcn.css('top', ctop+'px');

        // СЃС‚СЂР°Р»РєР° РІРЅРёР·
        if (next_lnk.length) {
            next_lnk.css('top', (hmax.height()-(next_lnk_hg-20))+'px');
        }
    });
}



// РєР°СЂС‚Р° РїРѕ С†РµРЅС‚СЂСѓ
function center_gmap(t) {

    if ($('#map-canvas').length == 0) { return; }

    setTimeout(function() {
        map.setCenter(marker.getPosition());
    }, t);
}




// РіСѓРіР» РєР°СЂС‚Р° РёРЅРёС†РёР°Р»РёР·Р°С†РёСЏ, СЃС‚РёР»Рё
function init_gmap() {

    if ($('#map-canvas').length == 0) { return; }

    //var map;
    var oz = new google.maps.LatLng(55.772973,37.611133);

    var MY_MAPTYPE_ID = 'РјРѕСЏ РєР°СЂС‚Р°';

    var featureOpts = [
        {
            "featureType": "landscape",
            "stylers": [
              { "saturation": -100 }
            ]
        },
        {
            "featureType": "road",
            "stylers": [
              { "saturation": -100 }
            ]
        },
        {
            "featureType": "administrative",
            "stylers": [
              { "saturation": -100 }
            ]
        },
        {
            "featureType": "poi",
            "stylers": [
              { "saturation": -100 }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
              { "saturation": -100 }
            ]
        }
    ];

    var mapOptions = {
      zoom: 17,
      center: oz,
      /*disableDefaultUI: true,*/
      scrollwheel: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var contentString = '<div id="content">'+
                    '<div id="siteNotice"></div>'+
                    '<div id="bodyContent">'+
                    '<p style="padding-top: 8px; line-height: 1.2;"><b>РђР™ZMEDIA <br />СЂРµРєР»Р°РјРЅРѕРµ Р°РіРµРЅС‚СЃС‚РІРѕ</b></p>'+
                    '</div>'+
                    '</div>';



    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
          position: oz,
          map: map,
          title: 'РњРѕСЃРєРІР°, РЎР°РґРѕРІР°СЏ-РљР°СЂРµС‚РЅР°СЏ, Рґ. 22 СЃ. 1, 5 СЌС‚Р°Р¶'
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    infowindow.open(map,marker);
}






/* ************************************************************************** */
/* ************************************************************************** */
/* ************************************************************************** */

// РїР»Р°РіРёРЅ РїРѕ С†РµРЅС‚СЂСѓ СЌРєСЂР°РЅР°
jQuery.fn.center = function()
{
	var w = $(window);
	this.css("position","absolute");
	this.css("top",(w.height()-this.height())/2+w.scrollTop() + "px");
	this.css("left",(w.width()-this.width())/2+w.scrollLeft() + "px");
	return this;
}

// РїРѕРєР°Р·Р°С‚СЊ С„РѕСЂРјСѓ Р·Р°СЏРІРєРё
function show_form_send(tp_form) {

    //var tp_form = 1;

    tp_form = tp_form*1;
    $('.form_send .tp_form').val(tp_form);

    if (tp_form == 0) {
        $('#frm_snd_title').html('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
        $('#frm_snd_butt').html('РћРўРџР РђР’РРўР¬');
    }
    if (tp_form == 1) {
        $('#frm_snd_title').html('РљРѕРЅСЃСѓР»СЊС‚Р°С†РёСЏ СЌРєСЃРїРµСЂС‚РѕРІ Aizpro');
        $('#frm_snd_butt').html('РџРћР›РЈР§РРўР¬ РљРћРќРЎРЈР›Р¬РўРђР¦РР®');
    }
    if (tp_form == 2) {
        $('#frm_snd_title').html('Р—Р°РєР°Р·Р°С‚СЊ РІРёРґРµРѕ РєРѕРЅС‚РµРЅС‚');
        $('#frm_snd_butt').html('Р—РђРљРђР—РђРўР¬');
    }
    if (tp_form == 3) {
        $('#frm_snd_title').html('РЎС‚Р°С‚СЊ РєР»РёРµРЅС‚РѕРј');
        $('#frm_snd_butt').html('РћРўРџР РђР’РРўР¬');
    }
    if (tp_form == 4) {
        $('#frm_snd_title').html('Р—Р°РєР°Р·Р°С‚СЊ СЂРµРєР»Р°РјРЅС‹Р№ СЂРѕР»РёРє');
        $('#frm_snd_butt').html('Р—РђРљРђР—РђРўР¬');
    }
    if (tp_form == 5) {
        $('#frm_snd_title').html('Р—Р°РєР°Р·Р°С‚СЊ РІРёРґРµРѕРјРµРЅСЋ');
        $('#frm_snd_butt').html('Р—РђРљРђР—РђРўР¬');
    }
    if (tp_form == 6) {
        $('#frm_snd_title').html('Р—Р°РєР°Р·Р°С‚СЊ РІРёРґРµРѕ РїСЂРµР·РµРЅС‚Р°С†РёСЋ');
        $('#frm_snd_butt').html('Р—РђРљРђР—РђРўР¬');
    }
    //  tp_form == 7  РѕР±СЂР°С‚РЅС‹Р№ Р·РІРѕРЅРѕРє


    $('#fade2, .form_send').stop().fadeIn(300);
    form_send_resize();
}

// СЃРєСЂС‹С‚СЊ С„РѕСЂРјСѓ Р·Р°СЏРІРєРё
function hide_form_send() {
    $('#fade2, .form_send, .form_send_ok').hide();
    clearTimeout(timer_send_ok);
}

// РїРѕР·РёС†РёСЏ С„РѕСЂРјС‹ РѕР±РЅРѕРІРёС‚СЊ
function form_send_resize() {

    $('#fade2').height(1);
    $('#fade2').height($(document).height()).width($(document).width());
    //$('.form_send').center();
    //$('.form_send_ok').center();
}



function ajrun(query,arr,func) {
	op = (arguments.length>3)?arguments[3]:'';
	file = (arguments.length>4)?arguments[4]:[];
	JsHttpRequest.query(
	  query,    		// backend
	  { op:op, arr: arr, file:file }, // РџР°СЂР°РјРµС‚СЂС‹
	  func,					// РѕР±СЂР°Р±РѕС‚РєР° СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ
	  true					// true - РЅРµ РєРµС€РёСЂРѕРІР°С‚СЊ РґР°РЅРЅС‹Рµ
	);
}



function replace_space(v) {
	var reg_sp = /^\s+/g;
	v = v.replace(reg_sp, '');
	var reg_sp = /\s+$/g;
	v = v.replace(reg_sp, '');
	return v;
}



// РїСЂРѕРІРµСЂРєР° РїРѕР»РµР№ Рё РѕС‚РїСЂР°РІРєР°
function send_mail(nm_form) {

    var parr_frm = $('.form_nm_'+nm_form);

    $('.err').removeClass('err');
    var error = 0;

    arr_data = new Array();

    //arr_data['typ'] = nm_form;
    arr_data['typ2'] = parr_frm.find('.tp_form').val();

    // С„РёРѕ:
    arr_data['inp_fio'] = replace_space(parr_frm.find('.inp_fio').val());
    parr_frm.find('.inp_fio').val(arr_data['inp_fio']);


    if( arr_data['inp_fio'] == '') {
           error = 1;
           parr_frm.find('.inp_fio').parent().addClass('err');
    }

    // РљРѕРЅС‚Р°РєС‚РЅС‹Р№ С‚РµР»РµС„РѕРЅ 1:
    arr_data['inp_phone'] = replace_space(parr_frm.find('.inp_phone').val());
    parr_frm.find('.inp_phone').val(arr_data['inp_phone']);


    arr_data['inp_mess'] = replace_space(parr_frm.find('.inp_mess').val());
    parr_frm.find('.inp_mess').val(arr_data['inp_mess']);


    if(error == 0) {

        ajrun(
            '/backend.php',
            {
                arr_data : arr_data
            },
            function( a, b ) {

                parr_frm.find('input').val('');
                parr_frm.find('textarea').val('');
                form_send_ok();
            },
            'send_mail'
        );
    }
}





function form_send_ok() {

    $('.form_send').hide();

    $('.form_send_ok, #fade2').stop().fadeIn(300);
    form_send_resize();

    timer_send_ok = setTimeout(function() {
        $('#fade2, .form_send_ok').fadeOut(300, function() {
            hide_form_send();
        });
    }, 2000);
}
