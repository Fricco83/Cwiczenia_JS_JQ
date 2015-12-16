document.addEventListener("DOMContentLoaded", function() {
	var nextButton = document.querySelector("#nextPicture");
	var prevButton = document.querySelector("#prevPicture");
	var picturesList = document.querySelectorAll(".slider li");
	var currentPicture = 0;
	picturesList[currentPicture].classList.add("visible");
	nextButton.addEventListener("click", function(event) {
		picturesList[currentPicture].classList.remove("visible");
		currentPicture++;
		if(currentPicture >= picturesList.length) {
			currentPicture = 0;
		}
		picturesList[currentPicture].classList.add("visible");
	prevButton.addEventListener("click", function(event) {
		picturesList[currentPicture].classList.remove("visible");
		currentPicture--;
		if(currentPicture < 0) {
			currentPicture = picturesList.length-1;
		}
		picturesList[currentPicture].classList.add("visible");
	})
	});
});