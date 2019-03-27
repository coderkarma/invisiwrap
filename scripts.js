$(document).ready(function () {
	$('.sidenav').sidenav();
	$('.MyModal').openModal();
});


document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.tap-target');
	var instances = M.TapTarget.init(elems, options);

	instance.next();
	instance.next(3); // Move next n times.
	instance.close();

});