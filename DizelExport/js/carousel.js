$(document).ready(function(){

	// След. скрипт будет работать, если '#b-carousel-com-trust .b-carousel-block' больше 4

	if ( $('#b-carousel-com-trust').find('.b-carousel-block').length > 4 ) {

		$('#b-carousel-b-com-trust-btn-next').click(function(){ // при клике на правую кнопку запускаем следующую функцию:
			var width = $('#b-carousel-com-trust .b-carousel-block').width();
			$('#b-carousel-com-trust .h-carousel-items').animate({left: '-' + (width + 15) +'px'}, 400); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
			setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
				$('#b-carousel-com-trust .h-carousel-items .b-carousel-block').eq(0).clone().appendTo('#b-carousel-com-trust .h-carousel-items'); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
				$('#b-carousel-com-trust .h-carousel-items .b-carousel-block').eq(0).remove(); // удаляем первый элемент карусели		
				$('#b-carousel-com-trust .h-carousel-items').css({'left':'0px'}); // возвращаем исходное смещение набора набора элементов карусели
			}, 450);
		});
		
		$('#b-carousel-b-com-trust-btn-prev').click(function(){ // при клике на левую кнопку выполняем следующую функцию:
			var width = $('#b-carousel-com-trust .b-carousel-block').width();		
			$('#b-carousel-com-trust .h-carousel-items .b-carousel-block').eq(-1).clone().prependTo('#b-carousel-com-trust .h-carousel-items'); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора	
			$('#b-carousel-com-trust .h-carousel-items').css({'left': '-' + (width + 15) +'px'}); // устанавливаем смещение набора -222px		
			$('#b-carousel-com-trust .h-carousel-items').animate({left: '0px'}, 400); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
			$('#b-carousel-com-trust .h-carousel-items .b-carousel-block').eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
		});

	}
	

	// След. скрипт будет работать, если '#b-carousel-com-trust .b-carousel-block' больше 8

	if ( $('#b-carousel-worker').find('.b-carousel-block').length > 1 ) {

		$('#b-carousel-b-worker-btn-next').click(function(){ // при клике на правую кнопку запускаем следующую функцию:
			var width = $('#b-carousel-worker .b-carousel-block').width();
			$('#b-carousel-worker .h-carousel-items').animate({left: '-' + (width + 15) +'px'}, 400); // производим анимацию: блок с набором картинок уедет влево на 222 пикселя (это ширина одного прокручиваемого элемента) за 200 милисекунд.
			setTimeout(function () { // устанавливаем задержку времени перед выполнением следующих функций. Задержка нужна, т.к. эти ффункции должны запуститься только после завершения анимации.
				$('#b-carousel-worker .h-carousel-items .b-carousel-block').eq(0).clone().appendTo('#b-carousel-worker .h-carousel-items'); // выбираем первый элемент, создаём его копию и помещаем в конец карусели
				$('#b-carousel-worker .h-carousel-items .b-carousel-block').eq(0).remove(); // удаляем первый элемент карусели		
				$('#b-carousel-worker .h-carousel-items').css({'left':'0px'}); // возвращаем исходное смещение набора набора элементов карусели
			}, 450);
		});
		
		$('#b-carousel-b-worker-btn-prev').click(function(){ // при клике на левую кнопку выполняем следующую функцию:
			var width = $('#b-carousel-worker .b-carousel-block').width();		
			$('#b-carousel-worker .h-carousel-items .b-carousel-block').eq(-1).clone().prependTo('#b-carousel-worker .h-carousel-items'); // выбираем последний элемент набора, создаём его копию и помещаем в начало набора	
			$('#b-carousel-worker .h-carousel-items').css({'left': '-' + (width + 15) +'px'}); // устанавливаем смещение набора -222px		
			$('#b-carousel-worker .h-carousel-items').animate({left: '0px'}, 400); // за 200 милисекунд набор элементов плавно переместится в исходную нулевую точку
			$('#b-carousel-worker .h-carousel-items .b-carousel-block').eq(-1).remove(); // выбираем последний элемент карусели и удаляем его
		});

	}

})