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


$(document).ready(function () {
    var $link = $('.menu-top a');
    
    $link.on('click',function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var target = $(id).offset().top;
        $('html, body').animate({
            scrollTop:target
        },1000)
    })
    return false;
});

