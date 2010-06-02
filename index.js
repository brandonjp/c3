$(document).ready(     function() { 
        
$('ul>li>ul').hide().parent('li').css('cursor','pointer').click(function() {
//$(this).children().show().parent('li').siblings().children().hide();
$(this).parents('div#c3wrap').append($('<div class="col">')).load($(this));
});
    
}); 