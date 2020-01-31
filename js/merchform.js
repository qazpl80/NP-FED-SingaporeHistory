var prices = new Array();
prices["units of nothing! Please select an item."] = 0;
prices["British Hat"] = 5;
prices["Japanese Hat"] = 10;
prices["Declaration of Independence replica"] = 15;
prices["Lee Kuan Yew phone cover"] = 20;
prices["SARS infosheet"] = 30;
function po() {
    var selectedProduct = document.forms["formal"].elements["product"].value;
    var price = prices[selectedProduct];
    var qty = document.getElementById("quantity").value;
    var tote = price * qty;
    var output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = "You ordered " + qty + " " + selectedProduct + ". Total Price = $" + tote;

}
function ordcfm() {
    var ming = document.getElementbyId("name").value;
    var exing = document.getElementById("email").value;
    var xing = document.getElementById("address").value;
    var hao = document.getElementById("postalcode").value;
    var guo = document.getElementById("country").value;
    var chu = document.getElementById("ordcfmd").value;
    chu.style.display = "block";
    chu.innerHTML = "Thank you for your order, " + ming + ". It will be sent to " + xing + "(" + hao + ")" + " in " + guo + ". A receipt has been sent to confirm at " + exing + ".";
}
 function clear() {
    var op = document.getElementById("output");
     op.innerHTML = "";
     document.getElementById("formal").reset();
}
