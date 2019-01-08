$(document).ready(function () {
    $(window).scroll(function () {
        if($(this).scrollTop() > 20) {
            $('.menu-top').addClass('menu-fixed').fadeIn('fast');
        }
        else {
            $('.menu-top').removeClass('menu-fixed').fadeIn('fast');
        }
    })
});