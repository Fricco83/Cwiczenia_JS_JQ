$(document).ready(function () {
	var header = $("h1");

	header.on("click", function(event) {
		$(this).next().slideToggle(1000);//w tej linii this odpowiada stworzonemu selektorowi
	});
});

//zrobić tak, aby po kliknięciu na dowolny header, znikał rozwinięty paragraf