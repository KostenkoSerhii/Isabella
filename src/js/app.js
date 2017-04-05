// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function(){

	$(".menu-btn").on("click", function(){
		var _this = $(this);
		_this.toggleClass("menu-btn-is-active");
		$(".menu-js").slideToggle(300);
		//if(windowWidth <= 991 && windowWidth >= 768){
		//	$(".js-hidden").toggleClass("is-hidden");
		//};
	});


});