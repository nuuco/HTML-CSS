;(function($){
	$(function(){

		$("header").scrollToGiveClass({
			baseline: 200,
		});

		/* 검색영역 나타내기 */
		$(".open_search").click(function(e){
			e.preventDefault(); 
			//ㄴ태그의 원래 기능을 동작시키지 않음.
			//a의 href="#" 때문에 스크롤이 맨 위로 올라가는 것 방지.
			$("#search").addClass("show");
		});

		/* 검색영역 숨기기 */
		$(".close_search").click(function(){
			$("#search").removeClass("show");
		});


		/* 검색영역 ESC키 눌러서 닫히게 */
		$(document).keydown(function(e){
			var state = $("#search").hasClass("show");
			var key = e.keyCode==27;
			if(state&&key){
				$("#search").removeClass("show");
			};
		});

		


		/* 전체메뉴 나타내기*/
		$(".open_menu").click(function(e){
			e.preventDefault();
			$(".menu").add(this).toggleClass("show");
			//this 는 키워드니까 "" 필요 없다.
		});

	


		/* Swiper 플러그인 호출 
			: 제이쿼리 바깥에 써도 되지만, 문서 준비시 바로 실행시키기 위해 */
		//객체 생성
		var mainSwiper = new Swiper("#main_view", {
			wrapperClass: "slider",  //슬라이드 요소를 감싸는 요소
			slideClass: "view", //슬라이드 요소
			autoplay: {	//자동으로 슬라이드 됨.
				delay: 5000,  //전환되는 시간
			},
			speed: 800,  //움직이는 시간
			spaceBetween: 10,  //슬라이드 사이 간격
			pagination: { //페이지 버튼 삽입
				el: '.pager', //넣은 대상을 선정
				bulletActiveClass: 'active', //활성된 영역 추가클래스
				clickable: true, //true : 버튼을 클릭할 경우
			},
		});//e:mainSwiper

		var pressSwiper = new Swiper("#press .inner", {
			wrapperClass: "slider",
			slideClass: "item",
			slidesPerView: 1,  //한 화면에 보여지는 슬라이드 갯수
			spaceBetween: 10,  //슬라이드 사이 간격
			pagination: {
				el: '.dot',
				bulletActiveClass: 'active',
				clickable: true,
			},
			breakpoints: {
				//화면의 너비가 320이상 적용 옵션
				320: {slidesPerView: 2,spaceBetween: 20},
				//화면의 너비가 640이상 적용 옵션
				640: {slidesPerView: 3,spaceBetween: 30},
				//화면의 너비가 768이상 적용 옵션(태블릿)
				768: {slidesPerView: 4,spaceBetween: 40},
				//화면의 너비가 1024이상 적용 옵션(pc)
				1024: {slidesPerView: 5,spaceBetween: 30},
			}

		});

	});
})(jQuery);