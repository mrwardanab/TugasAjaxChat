const chat = document.querySelector('#chat'); 
const message = document.querySelector('#message'); 
const name = document.querySelector('#name'); 
const baseUrl = 'http://localhost/ajax-chat/';

function readChat() {
    fetch(`${baseUrl}/chat-read.php`)
        .then(res => res.text()) 
        .then(res => {
            chat.value = res; 
        });
    setTimeout(readChat, 1000);
};

readChat();

message.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        fetch(`${baseUrl}/chat-write.php`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `message=`+`${name.value}`+' : '+`${message.value}` 
        });
        message.value = '';
    }
});