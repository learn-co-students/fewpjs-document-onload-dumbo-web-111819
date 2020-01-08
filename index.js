// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let idText=document.querySelector("#text")
    console.log(idText)
    idText.textContent="This is really cool!"
});

