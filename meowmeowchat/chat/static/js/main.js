$(function(){
    var is_other = 1;
    var elmnt = document.getElementById("content");
    var y = elmnt.scrollHeight;
	$('div.chatroom-body').scrollTop(y);

    var chatSocket = new WebSocket(
        'ws://' + window.location.host +
        '/ws/chat/' + roomName + '/');

    chatSocket.onmessage = function(e) {
        if(is_other){
            var data = JSON.parse(e.data);
            var message = data['message'];
            $('li:last').after('<li class="chat left">' +　message + '</li>');
            y = elmnt.scrollHeight;
            $('div.chatroom-body').scrollTop(y);
        }
        is_other = 1;
    };

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };

	var $textInput = $('input:text');
	var $chatForm = $('form.input');
	$chatForm.on('submit', function(e){
        is_other = 0;
		e.preventDefault();
		var newText = $textInput.val();
		if(newText != ''){
			$('li:last').after('<li class="chat right">' +　newText + '</li>');
			$textInput.val('');
			y = elmnt.scrollHeight;
			$('div.chatroom-body').scrollTop(y);

            chatSocket.send(JSON.stringify({
                'message': newText
            }));
		}
	});
});

