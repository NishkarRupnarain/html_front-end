var pageCounter = 1;
var productsContainer = document.getElementById("productsContainer");
var btn = document.getElementById("btn");
var api = 'http://localhost:8181/api/v1/users/findByEmail/'+document.getElementById(email).value;
var password = document.getElementById(password).value;

btn.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', api);
    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            console.log(password);
            console.log(ourData.password);
            if(password == ourData.password){
                console.log("It works");
            }
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function () {
        console.log("Connection error");
    };

    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {

        htmlString += "<div class='row'> <div class='column>'<div class='card'>" + "<div class='container'>" + "<img style='width:300px;height:369px;' src =" + data[i].name + ">" + "<div>" + "<p style='color:red;font-size:150%;'>" + data[i].desc
            + "<br>" + data[i].sku + " " + data[i].catergory + "<br> price: R" + data[i].price
            + "</p>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>";

    }

    productsContainer.insertAdjacentHTML('beforeend', htmlString);
}