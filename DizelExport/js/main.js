$(document).ready(function(){

	/* Вычислить ширину полосу прокрутки */

	var widthScroll = widthScroll();


	function widthScroll() {
		var div = $('<div>').css({
			position: "absolute",
			top: "0px",
			left: "0px",
			width: "100px",
			height: "100px",
			visibility: "hidden",
			overflow: "scroll"
		});
		
		$('html').eq(0).append(div);
		
		var width = div.get(0).offsetWidth - div.get(0).clientWidth;
		
		div.remove();
		
		return width;
	}

	/* Проверка номера */

	$('form').on('submit', function validForm (){

		var form = $(this),
			valInputTel = form.find('.input-tel').val(),
			reTel = /^[\+\]\d[\d\(\)\ -\-\-]{4,25}\d$/,
			validTel = reTel.test(valInputTel),
			valInputName, valInputEmail,
			validName, validEmail;

		if (validTel) {
			valInputName = form.find('.input-name').val();

			if (valInputName === undefined ){
				validName = true
			} else {
				var reName = /[0-9]/;
				validName = !(reName.test(valInputName.replace(/\s*/g,'')));
			}

			if (validName) {
				valInputEmail = form.find('.input-email').val();

				if (valInputEmail === undefined || valInputEmail.replace(/\s*/g,'') == ''){
					validEmail = true
				} else {
					var reEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					validEmail = reEmail.test(valInputEmail)
				}

		        if ( validEmail ) {
		        	$('#popup_'+form.attr('data-popup')).arcticmodal();
		        	if ($('body').find('.arcticmodal-container').length == 1) {
        				$('body').css({'left' : -widthScroll/2});
  					}

		        	sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php'); // https://fructcode.com/ru/blog/how-to-send-html-form-with-ajax/
		        
		        }

			}

		}

	    return  false
  	});

  	/* POP-UP */

  	$('.popup').click(function () {
  		var box = $('#popup_'+ $(this).attr('data-popup'));
        $(box).arcticmodal();
        $('body').css({'left' : -widthScroll/2});
    });

    $('.box-modal_close').click(function(){
    	if ($('body').find('.arcticmodal-container').length == 1) {
	    	setTimeout(function(){
	    		$('body').css({'left' : 0 });
	    	}, 400)
	    }
    });

    /* Изначение alt фото работника из его имени */

    $('.worker__photo').attr({'alt' : function() {
    	return $(this).parent().parent().children('.worker__about').children('.worker__name').text();
    }})

    function sendAjaxForm(result_form, ajax_form, url){ // https://fructcode.com/ru/blog/how-to-send-html-form-with-ajax/
    	 $.ajax({
	        url:     url,  // url php-обработчика
	        type:     "POST",
	        dataType: "html",
	        data: $("#"+ajax_form).serialize()
	 	});
    };

    /* Fixed header-nav */

    $(window).on('scroll', function() {
		var scroll = $(window).scrollTop(),
			heightHeaderContact = $('#header-contact').innerHeight();

		if (scroll >= heightHeaderContact) {
			$('#header-nav').addClass('fixed w100');
		} else {
			$('#header-nav').removeClass('fixed w100');
		}
	});

	 // Плавная прокрутка
    $('.go_to').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });

    // Отслеживание активной секции

    var menu_selector = ".nav__list";

	function onScroll(){
		var scroll_top = $(document).scrollTop();
		$(menu_selector + " a").each(function(){
			var hash = $(this).attr("href");
			var target = $(hash);
			if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
				$(menu_selector + " a.active").removeClass("nav__link_active");
				$(this).addClass("nav__link_active");
			} else {
				$(this).removeClass("nav__link_active");
			}
		});
	}
		
	$(document).ready(function () {
		$(document).on("scroll", onScroll);
		$("a[href^=#]").click(function(e){
			e.preventDefault();
			$(document).off("scroll");
			$(menu_selector + " a.nav__link_active").removeClass("nav__link_active");
			$(this).addClass("nav__link_active");
			var hash = $(this).attr("href");
			var target = $(hash);
			$("html, body").animate({
			    scrollTop: target.offset().top
			}, 500, function(){
				window.location.hash = hash;
				$(document).on("scroll", onScroll);
			});
		});
	});

})