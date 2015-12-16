document.addEventListener("DOMContentLoaded", function() {
	var tooltipList = document.querySelectorAll(".tooltip");
	for(var i=0; i<tooltipList.length; i++) {
		tooltipList[i].addEventListener("mouseover", function(event) {
			var tooltipText = this.dataset.text;
			var newElement = document.createElement("SPAN");
			newElement.classList.add("tooltipText");
			newElement.innerHTML = tooltipText;
			this.appendChild(newElement);
		})
		tooltipList[i].addEventListener("mouseout",function(event) {
			var elementToRemove = this.querySelector(".tooltipText");
			this.removeChild(elementToRemove);
		});
	}
});

//<span class="tooltipText">Teskt tooltipa</span>