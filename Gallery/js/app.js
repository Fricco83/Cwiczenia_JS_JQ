/*
<div class="fullScreen">
	<img src="http://lorempixel.com/400/200/sports/1">
	<button class="close">Close</button>
</div>
*/

document.addEventListener("DOMContentLoaded", function() {
	var imagesList = document.querySelectorAll(".gallery img");
	//console.log(imagesList);
	var websiteBody = document.querySelector("body");
	for (var i=0; i < imagesList.length; i++) {
		imagesList[i].addEventListener("click", function (event) {
			var source = this.getAttribute("src");
			//console.log(source);
			var fullScreenDiv = document.createElement("DIV");
			var fullScreenImg = document.createElement("IMG");
			var fullScreenButton = document.createElement("BUTTON");
			fullScreenButton.innerHTML = "CLOSE";
			fullScreenDiv.classList.add("fullScreen");
			fullScreenButton.classList.add("close");
			fullScreenImg.setAttribute("src", source);

			fullScreenDiv.appendChild(fullScreenImg);
			fullScreenDiv.appendChild(fullScreenButton);

			fullScreenButton.addEventListener("click", function(event) {
				websiteBody.removeChild(fullScreenDiv);	
			});	

			websiteBody.appendChild(fullScreenDiv);
		});
	}
});

//dodać feature, gdzie będą dwa przyciski: next i prev i będą działać zgodnie ze swoją nazwą