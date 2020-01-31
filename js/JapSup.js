// JavaScript source code

function donation() {
    var money = document.getElementsByName("money");
    var donationamt = "";
    for (var i = 0; i < money.length; i++)
    {
        if (money[i].checked) {
            donationamt = money[i].value;
            
        }
    }
    return donationamt;
}
function freeitem() {
    var item = "";
    var da = donation();
    if (da == "1.00") {
        item = "Banana Money Replica";
    }
    else if (da == "5.00") {
        item = "Japanese Occupation Stamp Replica";
    }
    else {
        item = "Singapore Country Eraser Ear Studs";
    }
    return item;
}
function msg() {

    var msg = document.getElementById("msg");
    var donationamt = donation();
    var item = freeitem();
    msg.innerHTML = "Your chosen donation amount :$" + donationamt + ". (free " + item + ")";

}

function submitForm() {
    var name = document.getElementById("iName").value;
    var item = freeitem();
    var donationamt = donation();
    alert("Thank you for your donation of $ "+ donationamt + "," + name + ". You will also receive a free " + item + ".");
}
