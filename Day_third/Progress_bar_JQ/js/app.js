/*1. Zmienne
	a) wszystkie progressbary
	b) buttony
2. Dodać do buttonow eventy click. 
	b)Konsola ma wypisywac atrybuty dataset.
3. Znaleźć element o podanym id (span). Div o podanym id i znaleźć jego dziecko.
4. Zabrać temu elementowi (punkt 3) wszystkie klasy.
5. Ddoać klasę o podanym kolorze.
6. Wyanimować zmiany szerokości.*/

$(document).ready(function () {
	var progressBar = $(".progress-bar");
	var buttons = $(".changeBar");
	//console.log(button);
	buttons.on("click", function (event) {
		var id = $(this).data("id");//jeżeli chcemy użyć elementu,  na który klikamy, to używamy this
		//console.log("klikam na button o id" + id);
		var width = $(this).data("width");
		console.log(width);
		var color = $(this).data("color");
		//console.log(color);
		var myProgressBar = progressBar.filter("#bar" + id);
		var mySpan = myProgressBar.find("span");
		console.log(mySpan);
		mySpan.removeClass();
		mySpan.addClass(color);
		mySpan.animate ({
			width: width //po lewej stronie jest klucz, po prawej wartość
		}, 1000);
	});
});