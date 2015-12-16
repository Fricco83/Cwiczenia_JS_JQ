document.addEventListener("DOMContentLoaded", function() {
	var allPictures = document.querySelectorAll(".gallery img");
	var showButton = document.querySelector("#showButton");
	var hideButton = document.querySelector("#hideButton");
	var tagInput = document.querySelector("#tagInput");

	hideButton.addEventListener("click", function (event) {
		var tag = tagInput.value;
		tag = tag.trim();
		if(tag.length === 0) {
			return;
		} 
		for(var i = 0; i < allPictures.length; i++) {
			var pictureTags = allPictures[i].dataset.tag;
			if(pictureTags.indexOf(tag) !== -1) {
				allPictures[i].classList.add("invisible");
			}
		}
	});
	showButton.addEventListener("click", function(event) {
		var tag = tagInput.value;
		tag = tag.trim();
		if(tag.length === 0) {
			return;
		}
		for(var i = 0; i < allPictures.length; i++) {
			var pictureTags = allPictures[i].dataset.tag;
			if(pictureTags.indexOf(tag) !== -1) {
				allPictures[i].classList.remove("invisible");
			}
		}
	})
});