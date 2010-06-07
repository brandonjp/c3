jQuery(document).ready(function($) {

	function doStuff() {
		$('li>ul').hide()  //  hide the ul's contained inside li's
		.parent('li').click(function() {  //  get the parent li of the hidden ul's and when clicked...
			var alanthicke = $(this).children('ul').clone().show();  //  set a variable for the ul inside that li, then clone it and show the clone
			$(this).parents('div.c3col').next().html(function() {  //  get this, find the parent div.c3col, then the next div.c3col and set the html...
				$(this).html(alanthicke);  //  take that next div.c3col and set it's html content to the variable we created on click
				doStuff();  //  then run this function again on the inserted content, this allows us to unlimited nested ul's
			}).nextAll().html('');  //  finally, clear the html contents of the next and all following div.c3col's
		});
	}

	doStuff();

});
