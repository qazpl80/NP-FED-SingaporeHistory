// JavaScript source code
function submitForm() {
    var divobj = document.getElementById("message");
    divobj.style.display = "block";
    divobj.innerHTML = ("Your request have been submitted.");
}

function resetForm() {
    var freset = document.getElementById("form");
    freset.reset();
}