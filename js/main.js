$(function(){
	//登入頁面
	$('.btn-create').on('click', function(e){
		e.preventDefault();
		$('.signup-button-group').addClass('hide');
		$('.input-create').removeClass('hide');
	});
	$('.btn-enter').on('click', function(e){
		e.preventDefault();
		$('.signup-button-group').addClass('hide');
		$('.input-enter').removeClass('hide');
	});
	
	//登入頁面結束

	//聊天室窗
	var elmnt = document.getElementById("content");
	var y = elmnt.scrollHeight;
	$('div.chatroom-body').scrollTop(y); 
	var $textInput = $('input:text');
	var $chatForm = $('form.input');
	$chatForm.on('submit', function(e){
		e.preventDefault();
		var newText = $textInput.val();
		if(newText != ''){
			$('li:last').after('<li class="chat right">' +　newText + '</li>');
			$textInput.val('');
			y = elmnt.scrollHeight;
			$('div.chatroom-body').scrollTop(y); 
		}
	});
	//聊天室窗結束
	
});