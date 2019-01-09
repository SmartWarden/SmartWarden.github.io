$(document).ready(function () {
    var $header = $('.header');
    var $nav = $('.menu-top')
    var flag = false;
    
    function fixedNav() {
        if(scrollY >= $header.innerHeight()- $nav.innerHeight() && !flag){
            $nav.addClass('menu-fixed').css('opacity',0).animate({
                opacity: 1
            },500)
            flag = true;
        }
        else if (scrollY < $header.innerHeight()- $nav.innerHeight() && flag){
            $nav.animate({
                opacity:0
            },500,function () {
                $(this).removeClass('menu-fixed').removeAttr('style')
            })
            flag = false;
        }
    }
    
    $(window).on('scroll',fixedNav);
    fixedNav()
});


$(document).ready(function () {
    var $link = $('.menu-top a');
    
    $link.on('click',function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var target = $(id).offset().top - 40;
        $('html, body').animate({
            scrollTop:target
        },1000)
    })
    return false;
});


    $(window).scroll(function () {
        var $header = $('.header');
        var scroll = $(this).scrollTop();
        if(scroll >= $header.innerHeight()) {
            $('#arrov-top').fadeIn(500);
        }
        else{
            $('#arrov-top').fadeOut(500);
        }
   
        
    })
    var $top = $('#arrow-top');
    $top.click(function () {
        $('html, body').animate({
            scrollTop:0
        }, 1000)
       
    })





