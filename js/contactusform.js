// JavaScript source code
//Yuan Ming's code
function submitForm() {
    var divobj = document.getElementById("message");
    divobj.style.display = 'block';
    divobj.innerHTML = "Request Submitted"
    alert("Your request have been submitted.\nWe will contact you through your e-mail provided")
}

function resetForm() {
    var freset = document.getElementById("form");
    freset.reset();
    divobj.style.display = 'none';
}