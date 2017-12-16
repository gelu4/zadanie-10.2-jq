$(function(){
	
	var $span = $('span');
$span.each(function (index, element) {
	if (index % 2 == 0) {
		$(this).css('color', 'red');
	};
});


var $paragraphs = $('p');
$paragraphs.each(function (index, element) {
	var $button = '<button class="btn" data-temp="' + index + '">Click me</button>';
	$(this).append($button)
});

$("button").click(function () {
	alert($(this).attr("data-temp"));
});

$(function () {
	var $p = $('<p></p>'),
		$pWithText = $('<p>Hi new element 1!</p>');

	$("body").append($pWithText);

});

$(function () {
	var $div = $('<div>with add class</div>');
		$('body').append($div),
		$($div).addClass('zupełnie-nowa-klasa');
	console.log($div);
});

$(function () {
	var $div = $('<div class="do-usuniecia">Class rmove</div>');
		$('body').append($div),
		$($div).removeClass('do-usuniecia');
	console.log($div);
});


$(function () {
	var $div = $('<div>Atrybut add</div>');
		$('body').append($div),
		$($div).attr('src', 'nowy-atrybut');
	console.log($div);
});

$(function () {
	var $div = $('<div class="klasa-kontrolna" src="nowy-atrybut">Atrybut remove</div>');
		$('body').append($div),
		$($div).removeAttr('src', 'nowy-atrybut');
	console.log($div);
});

$(function () {
	var $div = $('<div class="klasa-kontrolna-pierwsza" href="https://interia.pl">Atrybut value</div>');
		$('body').append($div);
	
	alert($('.klasa-kontrolna-pierwsza').attr('href'));
});

$('.kontrolny-div').before('<h1>Element przed</h1>');

$('.kontrolny-div').after('<h1>Element po</h1>');

	
	$(function () {
	var $div = $('<div class="pierwszy">Text przed</div>');
		$('body').append($div);
	
	($('.pierwszy').text('Znieniony text'));
});

$('p:first').hide();	
	
$('p:first').show(7000);	
});