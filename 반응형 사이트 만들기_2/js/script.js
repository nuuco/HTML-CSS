;(function($){

	$(document).ready(function(){  
		//원래 자가실행함수로 $ = jQuery 를 만들어줘야하지만
		//워낙 많이 쓰다보니, 제이쿼리 내부에 $ = jQuery 를 정의해줌.
		//즉 자가실행함수 없이 그냥 $ 써도 된다. 
		$('.slider').bxSlider({
			auto: true, mode: 'fade', speed: 1000, prevText: '', nextText: ''
		});

		/* 요소를 복제하여 추가하기 */
		var menu = $("#gnb > ul").clone();
		//clone() : 객체(대상)을 복제하여 반환함.
		//menu에는 복제된 객체가 들어가 있다.
		$("#main_menu").append(menu);
		//복제된 내용(menu)을 대상(#main_menu) 안에 넣음.

		$("#main_menu a").addClass('icon');
		//addClass('클래스명') : 클래스 부여 함수
		//a 태그에게 "icon" 클래스를 부여함.

		var sns = $(".sns").clone();
		$("footer").prepend(sns);

		/**
		 * A.prepend(B) : A 안에 B를 첫번째 요소로 삽입
		 * A.prependTo(B) : A 를 B 안에 첫번째 요소로 삽입
		 * A.append(B) : A 안에 B를 마지막 요소로 삽입
		 * A.appendTo(B) : A 를 B 안에 마지막 요소로 삽입
		 */




	}); //end:ready()

})(jQuery);