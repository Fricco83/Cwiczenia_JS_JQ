document.addEventListener("DOMContentLoaded", function() {
	var listElements = document.querySelectorAll(".nav>ul>li");
	for (var i=0; i<listElements.length; i++) {
		listElements[i].addEventListener("mouseover", function(event) {
			var subList = this.querySelector("ul");
			if(subList !== null) {
				subList.style.display="block";
			}
		})
		listElements[i].addEventListener("mouseout", function(event) {
			var subList = this.querySelector("ul");
			if(subList !== null) {
				subList.style.display="none";
			}
		})
	}
});