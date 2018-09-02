$(function(){
	var elmnt = document.getElementById("content");
	var y = elmnt.scrollHeight;
	$('div.chatroom-body').scrollTop(y); 
	var $textInput = $('input:text');
	var $chatFoem = $('form.input');
	$chatFoem.on('submit', function(e){
		e.preventDefault();
		var newText = $textInput.val();
		if(newText != ''){
			$('li:last').after('<li class="chat right">' +　newText + '</li>');
			$textInput.val('');
			y = elmnt.scrollHeight;
			$('div.chatroom-body').scrollTop(y); 
		}
	});
});