;(function($){
	$(function(){

		$("#fixed_area").scrollToGiveClass();
		$(".menu_btn").scrollToGiveClass();

		$(".menu_btn").click(function(){
			$("#fixed_area").add(this).toggleClass("open");
			//add() : 대상을 추가 효과
			//this : 클릭한 버튼(함수의 주체)
		});


	});
})(jQuery);