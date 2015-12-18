$(document).ready(function (){
	var cookies = $(".cookies");
	var websiteBody = $("body");
	var button = $(".close");
	//console.log(cookies);
	button.on("click", function (event) {
		cookies.remove();//poniżej rozwiązanie alternatywne z animacją
		//cookies.slideToggle(600);
	});
});