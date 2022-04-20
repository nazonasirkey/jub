let form = document.querySelector(".form")  
let username = form.username
form.addEventListener("submit", (e) => {
e.preventDefault()
alert("Hello " + username.value + "! thank you for contacting Ajabfix limited, we recieved your message. for more information contact us: 0722283195. Ramadhan mubarak")
 });
