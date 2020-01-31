var prices = new Array();
prices["units of nothing! Please select an item."] = 0;
prices["British Hat"] = 5;
prices["Japanese Hat"] = 10;
prices["Declaration of Independence replica"] = 15;
prices["Lee Kuan Yew phone cover"] = 20;
prices["SARS infosheet"] = 30;
function printOutput() {
    var selectedProduct = document.forms["formal"].elements["product"].value;
    var price = prices[selectedProduct];
    var qty = document.getElementById("quantity").value;
    var tote = price * qty;
    var output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = "You ordered " + qty + " " + selectedProduct + ". Total Price = $" + tote;

}
function ordcfm() {
    var ming = document.getElementbyId("name");
    var exing = document.getElementById("email");
    var xing = document.getElementById("address");
    var hao = document.getElementById("postalcode");
    var guo = document.getElementById("country");
    var chu = document.getElementById("ordcfmd");
    chu.style.display = "block";
    chu.innerHTML = "Thank you for your order, " + ming + ". It will be sent to " + xing + "(" + hao + ")" + " in " + guo + ". A receipt has been sent to confirm at " + exing + ".";
}
document.getElementById("reset").onclick() = function () {
    document.getElementById("output").innerHTML = "";
    formal.reset;
}
