;(function($){
	$(function(){

		/* 제이쿼리를 동작시키는 구간 */
		/* 플러그인 호출문 작성 */
		$("#fixed_area").scrollToGiveClass();

		$(".menu_btn").scrollToGiveClass({
			baseline: 500,
		});

		$(".menu_btn").clickToGiveClass({
			class: "open",
		})
	});
})(jQuery);