$(document).ready(function () {
	var ul = $(".slider ul");//tworzenie zmiennych jest tutaj dość oczywiste
	var nextButton = $("#nextPicture");
	var prevButton = $("#prevPicture");
	var pictures = $(".slider img");
	var imageWidth = 400;//taką szerokość mają nasze zdjęcia, pobrane z lorempixel
	var currentPicturePosition = 0;//od tej pozycji startujemy

	ul.css("width", imageWidth * pictures.length + "px");//nastawiamy klasę css dla ul
	ul.css("left", -currentPicturePosition * imageWidth + "px");//nastawiamy klasę css, ale dlaczego tutaj jest -currentPictureposistion?
	nextButton.on("click", function(event) {
		currentPicturePosition++;
		if(currentPicturePosition >= pictures.length) {//tutaj nie rozumiem o co chodzi. 
			currentPicturePosition = pictures.length - 1;//to samo co wyzej
		} 
		ul.animate({ "left": -currentPicturePosition * imageWidth + "px"//animacja na klik, dlaczego jest '-'?
		}, 1000 );
	});
	prevButton.on("click", function(event) {
		currentPicturePosition--;
		if(currentPicturePosition < 0) {
			currentPicturePosition = 0;
		}
			ul.animate({ "left": -currentPicturePosition * imageWidth + "px"
		}, 1000 );
	});
});