$(document).ready(function () {
$("div.tab_content").hide();
$("div.tab_container div.tab_content:first-child").show();
$("ul.tabs li:first").addClass("active");

    $('ul.tabs > li').click(function () {
        if (!($(this).hasClass('active'))) {
            var thisLi = $(this);
            var numLi = thisLi.index();
            thisLi.addClass('active').siblings().removeClass('active');
            thisLi.parent().next().children('div').hide().eq(numLi).show();
        }
    });
});
