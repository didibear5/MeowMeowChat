$(function(){
    var is_other = 1;
    var elmnt = document.getElementById("content");

    var chatSocket = new WebSocket(
        'ws://' + window.location.host +
        '/ws/chat/' + roomName + '/');

    chatSocket.onmessage = function(e) {
        if(is_other){
            var data = JSON.parse(e.data);
            var message = data['message'];
            $('.chats').append('<li class="chat left">' +　message + '</li>');
            y = elmnt.scrollHeight;
            $('div.chatroom-body').scrollTop(y);
        }
        is_other = 1;
    };

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };

    //add message in chatroom
	var $textInput = $('input:text');
	var $chatForm = $('form.input');
	$chatForm.on('submit', function(e){
        is_other = 0;
		e.preventDefault();
		var newText = $textInput.val();
		if(newText != ''){
			$('.chats').append('<li class="chat right">' +　newText + '</li>');
			$textInput.val('');
			let y = elmnt.scrollHeight;
			$('div.chatroom-body').scrollTop(y);

            chatSocket.send(JSON.stringify({
                'message': newText
            }));
		}
	});

    //change chatroom color
    $('#base').on('change', function(){
        document.documentElement.style.setProperty('--theme-color', this.value);
    });

     //change chatroom height
    $(window).on('load resize ', function(){
        var windowHeight =  window.innerHeight;
        $('.chatroom-body').css( "height", function(){
            return windowHeight - 170;
        });
    });
});

