//Changing text on page when DOM has loaded
const changeText = document.addEventListener("DOMContentLoaded", function() {
    let a = document.getElementById("text")
    a.textContent = "This is really cool!"

})
changeText();
