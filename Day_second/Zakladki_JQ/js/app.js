$(document).ready(function() {
 var tabs = $(".tabs li");
 var divs = $(".tabs div");
 var currentVisibleElement = -1;//przechowuje wartość teraz widocznego elementu. Na początku jest -1, aby nie był widoczny
 tabs.each(function(index, element) {
 	//console.log(index);
 	//console.log(element);
 	$(element).on("click", function(event) {
 		//console.log("click on" + index + "li element");
 		if(currentVisibleElement !== -1 && currentVisibleElement !== index) {
 			divs.eq(currentVisibleElement).hide();
 		}
 		currentVisibleElement = index;
 		divs.eq(currentVisibleElement).show();
 	});
 });
});