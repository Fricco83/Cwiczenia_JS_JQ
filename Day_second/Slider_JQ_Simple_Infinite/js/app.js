$(document).ready(function () {
	var ul = $(".slider ul");
	var firstUlChild = ul.children().first();
	var lastUlChild = ul.children().last();
	firstUlChild.before(lastUlChild.clone());
	lastUlChild.after(firstUlChild.clone());
	var nextButton = $("#nextPicture");
	var prevButton = $("#prevPicture");
	var pictures = $(".slider img");
	var imageWidth = 400;
	var currentPicturePosition = 1;

	ul.css("width", imageWidth * pictures.length + "px");
	ul.css("left", -currentPicturePosition * imageWidth + "px");
	nextButton.on("click", function(event) {
		currentPicturePosition++; 
		ul.animate({ "left": -currentPicturePosition * imageWidth + "px"
		}, 1000, function() {
			if(currentPicturePosition === pictures.length -1) {
				currentPicturePosition  = 1;
				ul.css("left", -currentPicturePosition * imageWidth + "px");
			}
		});
	});
	prevButton.on("click", function(event) {
		currentPicturePosition--;
		ul.animate({ "left": -currentPicturePosition * imageWidth + "px"
		}, 1000, function() {
			if(currentPicturePosition === 0) {
				currentPicturePosition = pictures.length -2;
				ul.css("left", -currentPicturePosition * imageWidth + "px");
			}
		});
	});
});