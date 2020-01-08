// Your code goes here

document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }

// This lab is stupid! My code does the same exact thing! I miss rails!
// document.addEventListener("DOMContentLoaded", function(){
//     pTag = document.getElementById("text");
//     pTag.textContent = "This is really cool!";
// });