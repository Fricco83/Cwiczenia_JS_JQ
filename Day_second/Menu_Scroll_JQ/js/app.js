$(document).ready(function() {
	var nav = $(".nav");
	var navDistanceFromTop = nav.position().top;
	var placeholder = $("<div></div>");
	placeholder.css("height", nav.outerHeight());

	$(window).resize(function() {
		if(nav.hasClass("sticky")) {
			navDistanceFromTop = placeholder.position().top;
		}
		else {
			navDistanceFromTop = nav.position().top;
		}
		//console.log("resize");
		navDistanceFromTop = nav.position().top;
	});

	//console.log(navDistanceFromTop);
	$(window).on("scroll", function (event) {
		var currentDistanceFromTop = $(document).scrollTop();
		if(currentDistanceFromTop > navDistanceFromTop) {
			nav.addClass("sticky");
			if(placeholder.parent().length === 0) {
				placeholder.insertBefore(nav);
			}
			//console.log("Dodaje klasę sticky"); //Pokazuje, ile razy wczytywany jest event przy okazji zmiany wielkości okna
		}
		else {
			nav.removeClass("sticky");
			if(placeholder.parent().length !== 0) {
				placeholder.detach();
			}
			//console.log("Zabieram klasę sticky"); //Pokazuje, ile razy wczytywany jest event przy okazji zmiany wielkości okna
		}
	});
});