let form = document.querySelector(".form")  
let username = form.username
form.addEventListener("submit", (e) => {
e.preventDefault()
alert("Hello " + username.value + "! thank you for contacting Ajab solution limited, we recieved your masssage .contact us 0722283195 for more information. Ramadhan mubarak")
 });
