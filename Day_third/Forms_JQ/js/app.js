/*
1. Zmienne 
	a) form
	b) 3 x input
2. Submit event on form.
3. Sprawdzić w event czy imię jest dłuższe niż 5 znaków oraz czy email zawiera znak @. Wiadomość musi być dłuższa niż 10 znaków.
4. Jeśli warunki nie są spełnione, to pusty div na stronie wypełnić jakąś treścią i zapobiec wysłaniu maila (preventDefault).
*/

$(document).ready(function () {
	var form = $("#contactForm");
	//console.log(form);
	var name = $("#nameInput");
	//console.log(name);
	var email = $("#emailInput");
	//console.log(email);
	var message = $("#messageInput");
	var errorDiv = $(".error");
	var errorMessage = "";
	form.on("submit", function (event) {
		var nameValue = name.val();
		var emailValue = email.val();
		var messageValue = message.val();
		if(nameValue.length < 5) {
			errorMessage += "Name is too short ";
			event.preventDefault();
		}
		if(emailValue.indexOf("0") === -1 || emailValue.indexOf(".") === -1) {
			errorMessage += "Provide correct email address ";
			event.preventDefault();
		}
		if(messageValue.length < 10) {
			errorMessage =+ "Message shorter than 10 characters ";
			event.preventDefault();
		}
		errorDiv.text(errorMessage);
	});
});