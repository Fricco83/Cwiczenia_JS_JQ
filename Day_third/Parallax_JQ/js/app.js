$(document).ready(function(){
	var scene = $(".scene");
	var elements = $(".scene .element");
	var oldMousePositionX = 0;
	var oldMousePositionY = 0;
	//console.log(scene);
	//console.log(elements);
	elements.each(function(index, element){
		var jqElement = $(element);
		jqElement.css({
			"z-index": jqElement.data("z"),
			"left": jqElement.data("x"),
			"top": jqElement.data("y"),
		});
	});
	scene.on("mouseenter", function(event){
		oldMousePositionX = event.offsetX;
		oldMousePositionY = event.offsetY;
	});

	scene.on("mousemove", function(event){
		//console.log(event);
		var currentMousePositionX = event.offsetX;
		var currentMousePositionY = event.offsetY;
		
		if(event.target !== this) {
			currentMousePositionY += parseFloat($(event.target).css("top"));
			currentMousePositionX += parseFloat($(event.target).css("left"));
		}	

		var mouseMoveX = currentMousePositionX - oldMousePositionX;
		var mouseMoveY = currentMousePositionY - oldMousePositionY;
		//console.log("********************");
		//console.log(mouseMoveX);
		//console.log(mouseMoveY);
		elements.each(function(index, element){
			var jqElement = $(element);
			var speed = jqElement.data("speed");
			jqElement.css({
				"left": "+=" + (mouseMoveX * speed),
				"top": "+=" + (mouseMoveY * speed),
			});
		});

		oldMousePositionX = currentMousePositionX;
		oldMousePositionY = currentMousePositionY;
	});
});