$(document).ready(function () {
	var ul = $(".slider ul");
	var nextButton = $("#nextPicture");
	var prevButton = $("#prevPicture");
	var pictures = $(".slider img");
	var imageWidth = 400;
	var currentPicturePosition = 0;

	ul.css("width", imageWidth * pictures.length + "px");
	ul.css("left", -currentPicturePosition * imageWidth + "px");
	nextButton.on("click", function(event) {
		currentPicturePosition++;
		if(currentPicturePosition >= pictures.length) {
			currentPicturePosition = pictures.length - 1;
		} 
		ul.animate({ "left": -currentPicturePosition * imageWidth + "px"
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