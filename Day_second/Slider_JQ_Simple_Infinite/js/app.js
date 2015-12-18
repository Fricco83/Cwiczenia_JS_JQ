$(document).ready(function () {
	var ul = $(".slider ul");//tworzenie takich zmiennych jest oczywiste i nie wymaga komentarza
	var firstUlChild = ul.children().first();//tutaj wywołujemy pierwsze dziecko z listy zdjęć; potrzebne do zapętlenia działania slidera
	var lastUlChild = ul.children().last();// ostatnie dziecko z listy zdjęć
	firstUlChild.before(lastUlChild.clone());//klonujemy ostatnie dziecko i wstawiamy przed pierwsze
	lastUlChild.after(firstUlChild.clone());//klonujemy pierwsze dziecko i wstawiamy po ostatnim
	var nextButton = $("#nextPicture");
	var prevButton = $("#prevPicture");
	var pictures = $(".slider img");
	var imageWidth = 400; //taką szerokość mają nasze zdjęcia, które pobraliśmy z lorempixel
	var currentPicturePosition = 1; //tu nie do końca pamiętam, dlaczego jest 1. ma to generalnie coś wspólnego z przejściem z ostatniego zdjęcia na pierwsze 

	ul.css("width", imageWidth * pictures.length + "px");//nastawia klasę css width dla ul; obliczana z formuły jak podano w zapisie
	ul.css("left", -currentPicturePosition * imageWidth + "px");//nastawia klasę css left
	nextButton.on("click", function(event) {
		currentPicturePosition++; //przełącza na następne zdjęcie
		ul.animate({ "left": -currentPicturePosition * imageWidth + "px"//animacja przesunięcia zdjęcia po kliknięciu na nextButton
		}, 1000, function() {//funkcja, która dodaje mechanizm działania infinite, czyli że po klikniięciu na ostatnie zdjęcie w galerii, następuje przejście na pierwsze itd.
			if(currentPicturePosition === pictures.length -1) {//tu nie do końca rozumiem, dlaczego jest -1
				currentPicturePosition  = 1;//ani tu, dlaczego jest 1
				ul.css("left", -currentPicturePosition * imageWidth + "px");//tutaj zakładam, że przypisujemy klasę left dla zdjecia, które jest klikane
			}
		});
	});
	prevButton.on("click", function(event) {
		currentPicturePosition--;
		ul.animate({ "left": -currentPicturePosition * imageWidth + "px"
		}, 1000, function() {
			if(currentPicturePosition === 0) {//dlaczego tu jest 0?
				currentPicturePosition = pictures.length -2;//dlaczegoo tu jest -2?
				ul.css("left", -currentPicturePosition * imageWidth + "px");
			}
		});
	});
});