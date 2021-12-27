/*let windowH = window.innerHeight;
alert(windowH);

let chatH = windowH - 150;
alert(chatH);

let chat = document.querySelector(".chat");
alert(chat);

chat.style.height = chatH + "px";*/


let chatH = window.innerHeight - 150;
document.querySelector(".chat").style.height = chatH + "px";