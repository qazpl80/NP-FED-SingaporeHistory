// JavaScript source code

// clear the label when reset is clicked
document.getElementById("reset").onclick = function () {
    document.getElementById("output").innerHTML = "";
    document.getElementById("collectionDate").innerHTML = "";
    document.getElementById("finalMessage").innerHTML = "";
    orderForm.reset();
};

// Set and get price
// Set up an associative array. The key represents the item, the value represents the price 
var prices = new Array();
prices["None"] = 0;
prices["Black bean purses"] = 3.95;
prices["Southwestern Napoleons"] = 7.95;
prices["Coconut-Corn Chowder"] = 3.95;
prices["Jerk Rotisserie Chicken"] = 12.95;
prices["Thai Shrimp Kebabs"] = 12.95;
prices["Pasta Puttanesca"] = 12.95;

// function to find the price based on the drop down selection
function getPrice() {
    var price = 0;
    //Get a reference to the form id="orderform"
    var theForm = document.forms["orderForm"];
    //Get a reference to the select id="product"
    var selectedProduct = theForm.elements["product"];
    //set price equal to value user chose
    price = prices[selectedProduct.value];
    //finally we return price
    return price;
}

// function to display the order info
function printOutput() {
    var price = 0;
    // get a reference to the form id="orderform"
    var theForm = document.forms["orderForm"];
    // get a reference to the selected id="product"
    var selectedProduct = theForm.elements["product"].value;
    // set price equal to value user chose
    price = prices[selectedProduct];
    // get the quantity entered 
    var qty = document.getElementById("quantity").value;

    // display output
    var divobj = document.getElementById("output");
    divobj.style.display = "block";
    divobj.innerHTML = "You ordered " + qty + " " + selectedProduct + ". Price = $" + price + " x " + qty + " = $" + price * qty;
}

// function to display the collection date
function printDate() {
    var selectedDate = document.getElementById("date").value;
    document.getElementById("collectionDate").innerHTML = "Collection date: " + selectedDate;
}

// function to display display final message if order is made successfully
function showFinalMessage() {
    var name = document.getElementById("name").value;
    var divObj = document.getElementById("finalMessage");
    divObj.style.display = "block";
    divObj.innerHTML = "Thank you for your order, " + name;
}

