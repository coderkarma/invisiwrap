$(document).ready(function() {
	$('.sidenav').sidenav();
	$('.MyModal').openModal();

	$('#mc-embedded-subscribe-form').on('submit', event => {
		event.preventDefault();
		let data = $('#mc-embedded-subscribe-form').serializeArray();
		console.log(data);
		let firstName = data[0].value;

		let regex = /^[a-zA-Z]+$/;

		if (!regex.test(firstName)) {
			alert('please put your firstName');
			return;
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.tap-target');
	var instances = M.TapTarget.init(elems, options);

	instance.next();
	instance.next(3); // Move next n times.
	instance.close();
});

// ! modal
$(document).ready(function() {
	$('.sidenav').sidenav();
	$('.modal').modal();
	$('.modal').modal({
		dismissible: false
	});
	$('.signing-up').fadeOut();
	$('.modal').modal('open');
	$('.signing-up-later').click(() => {
		$('.signing-up').fadeIn('slow');
	});
	$('.signing-up').click(() => {
		$('.signing-up').fadeOut('slow');
	});
	$('.send').click(() => {
		//
	});
});
